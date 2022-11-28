const http = require("http");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/express/index.html"));
  //__dirname : It will resolve to your project folder.
});
//("https://type.fit/api/quotes")
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port);
console.debug("Server listening on port " + port);
