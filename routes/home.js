var express = require("express");
var router = express.Router();
const Sponsor = require("../models/Sponsor");
const Email = require("../models/Email")

router.get("/sponsors", (req, res, next) => {
  Sponsor.find().then((sponsors) => {
    res.json(sponsors);
  });
});

router.post("/add-sponsors", (req, res, next) => {
  const image = req.body.image;
  Sponsor.create({ image })
    .then((createdSponsor) => {
      res.json(createdSponsor);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/subscribe", (req, res, next) => {
  console.log("REQ BODY ===>",req.body)
  const email =req.body.email;

 Email.findOne({ email })
    .then((foundEmail) => {
      if (foundEmail) {
        res.json({ message:"This email is already subscribed." });
        return;
      }

  Email.create({email})
  .then((createdEmail) => {
    console.log("Created Email ==>", createdEmail)
    res.json(createdEmail)

  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  })
})})

module.exports = router;
