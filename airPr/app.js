const Flight = require("../flight");

const flightOne = new Flight();
const flightTwo = new Flight();
const flightThree = new Flight();
const flightFour = new Flight();
const flightFive = Flight.create({
  number: 8,
  destination: "Putin",
  origin: "Nursultan"
});

flightOne.number = 5;
flightOne.origin = "Lol";
flightOne.destination = "La la la";

flightTwo.number = 6;
flightTwo.origin = "bla";
flightTwo.destination = "Bu";

console.log(flightOne.flightInfo);
console.log(flightFive.flightInfo);
console.log(flightOne.flightCount);
console.log(flightOne.destinations);
