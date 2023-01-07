const http = require("http");

const htmlType = {
    "Content-Type": "text/html",
};

const routes = {
    GET: {
        "/index": (req, res) => {
            res.writeHead(200, htmlType);
            res.end("<h1>This is the home page!</h1>");
        },
    },
};

exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(200, htmlType);
            res.end("<h1>No such file was found!</h1>");
        }
    } catch (err) {
        console.log(err);
    }
};
