const http = require("http");
const fs = require("fs");

const htmlType = {
    "Content-Type": "text/html",
};

const routes = {
    GET: {
        "/index.html": (req, res) => {
            res.writeHead(200, htmlType);
            res.write(readFile(`./views/index.html`, res));
        },
    },
};

const readFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
            }
            res.write(data);
            res.end();
        });
    }
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
