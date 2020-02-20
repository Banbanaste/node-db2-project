const express = require("express");
const Cars = require("./cars-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Cars.all()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get cars" });
    });
});

router.post("/", (req, res) => {
  Cars.add(req.body)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "could not add new car" });
    });
});

module.exports = router;
