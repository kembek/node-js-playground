const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("whats your name? ", inputName => {

  console.log("Your name:", inputName);
  readline.close();
});
