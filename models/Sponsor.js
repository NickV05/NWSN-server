const { Schema, model } = require("mongoose");

const sponsorSchema = new Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Sponsor", sponsorSchema);
