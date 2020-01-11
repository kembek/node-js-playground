const user = require("./user.json");
const { greet } = require("./user");

console.log("User name", user.name);
console.log("User", user);
console.log("user", typeof user);
greet.call(user);
