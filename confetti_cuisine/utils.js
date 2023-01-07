const fs = require("fs");
const contentTypes = require("./contentTypes");
const httpStatus = require("http-status-codes");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html
                );
                res.end("There was an error serving the content!");
            }
            res.end(data);
        });
    },
};
