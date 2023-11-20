const { Schema, model } = require("mongoose");

const emailSchema = new Schema(
  {
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Email", emailSchema);