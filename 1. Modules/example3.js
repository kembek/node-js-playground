const operation = require("./operation");
const { multiply, concat } = require("./operation");

console.log("Operation", typeof operation);
console.log("Multiply", multiply(5, 5, 5));
console.log("Concat", concat("Lol", "GG"));