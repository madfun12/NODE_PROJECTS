// IMPORTS
const http = require("http");
const fs = require("fs");
const router = require("./router");

http.createServer(router.handle).listen(3000);
