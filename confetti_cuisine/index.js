// IMPORTS
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");
const router = require("./router");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});
router.get("/style.css", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.css);
    utils.getFile("public/css/style.css", res);
});

http.createServer(router.handle).listen(3000);
console.log("The server is running and listening on port 3000");
