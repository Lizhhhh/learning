const http = require('http');
const fs = require('fs');
const ROOTURL = "D:\\learning\\node\\webClass\\02";

var server = http.createServer();

server.on('request', function(req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile(ROOTURL + '/index.html', function(err, data) {
            if (err) {
                res.end("404 Not Found.")
            } else {
                res.end(data);
            }
        })
    } else {
        res.end("404 Not Found.");
    };
    if (url === '/a.txt') {
        fs.readFile(ROOTURL + '/a.txt', function(err, data) {
            if (err) {
                res.end("404 Not Found.")
            } else {
                res.end(data);
            }
        })
    } else {
        res.end("404 Not Found.");
    };
    if (url === '/apple/login.html') {
        fs.readFile(ROOTURL + url, function(err, data) {
            if (err) {
                res.end("404 Not Found.")
            } else {
                res.end(data);
            }
        })
    } else {
        res.end("404 Not Found.");
    };


})

server.listen(3000, function() {
    console.log("running...");
})