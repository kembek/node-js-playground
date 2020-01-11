const http = require("http"),
  express = require("express"),
  PORT = process.env.PORT;

const app = express();

app.get("/", function(req, res) {
  res.end("Airline");
});

http.createServer(app).listen(PORT);
