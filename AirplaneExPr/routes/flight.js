const express = require("express");
const router = express.Router();

const Flight = require("../flight");

const db = require("../db.json");

const flights = {};

for (let i in db) {
  flights[i] = Flight.create(db[i]);
}

router.get("/:number", function(req, res, next) {
  const number = req.param("number");


  if (!parseInt(number)) return res.send(flights);

  if (!flights[number])
    return res.status(404).json({
      status: "error",
      message: "Not found"
    });

  res.json(flights[number]);
});

router.put("/:number/update", function(req, res) {
  const number = req.param("number");

  if (!flights[number])
    return res.status(404).json({
      status: "error",
      message: "Not found"
    });

  const newFlight = flights[number].update();

  res.status(201).json({
    status: "success",
    newFlight
  });
});

module.exports = router;
