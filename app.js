var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");
var cors = require("cors");

var authRouter = require("./routes/auth");
var homeRouter = require("./routes/home");
var formsRouter = require("./routes/forms")

var app = express();

const clientPath = path.resolve(__dirname, '../client');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(clientPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.set("trust proxy", 1);
app.enable("trust proxy");

app.use(
  cors({
    origin: [process.env.CLIENT_URI],
  })
);

app.use("/auth", authRouter);
app.use("/home", homeRouter);
app.use("/forms", formsRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

module.exports = app;
