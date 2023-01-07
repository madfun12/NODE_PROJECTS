const port = 3000;
const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send("Hello, Universe!");
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
  })
  .listen(port, () => {
    console.log(`The express server is live and listening on port: ${port}`);
  });
