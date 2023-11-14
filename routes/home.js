var express = require('express');
var router = express.Router();
const Sponsor = require("../models/Sponsor")

router.get('/sponsors', (req, res, next) => {
  Sponsor.find()
  .then((sponsors) =>{
    res.json(sponsors)
  })
});

router.post('/add-sponsors',(req, res, next) => {
    const image = req.body.image;
    Sponsor.create({image})
    .then((createdSponsor) => {
    res.json(createdSponsor)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
})

module.exports = router;