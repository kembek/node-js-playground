const express = require("express");
const router = express.Router();

const Flight = require("../flight");

const db = require("../db.json");

const flights = {};

for (let i in db) {
  flights[i] = Flight.create(db[i]);
}

router.get("/", function(req, res) {
  res.render("list", {
    title: "Airplane",
    flights
  });
});

module.exports = router;
