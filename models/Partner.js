const { Schema, model } = require("mongoose");

const partnerSchema = new Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Partner", partnerSchema);