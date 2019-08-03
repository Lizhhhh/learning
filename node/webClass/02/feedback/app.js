var http = require("http");
var fs = require("fs");
var template = require("art-template");
var URL = require("url");
var dateFormat = require("format-datetime");

const comments = []


http
    .createServer(function(req, res) {
        var parseObj = URL.parse(req.url, true);
        var pathname = parseObj.pathname;
        var url = req.url;
        if (url === "/") { // 当请求'/'  就返回 index.html
            fs.readFile("./views/index.html", function(err, data) {
                if (err) {
                    return res.end("404 Not Found!");
                }
                var retStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(retStr);
            })
        } else if (url === "/post") {
            fs.readFile("./views/post.html", function(err, data) {
                if (err) {
                    return res.end("404 Not Found!");
                }
                res.end(data);
            })
        } else if (url.indexOf("/public/") === 0) {
            fs.readFile('.' + url, function(err, data) {
                if (err) {
                    return res.end("404 Not Found!");
                }
                res.end(data);
            })
        } else if (pathname === "/postComments") {
            let date = new Date();
            let dateStr = dateFormat(date, "yy年MM月dd日 HH:mm:ss");
            parseObj.query.dataTime = dateStr;
            comments.unshift(parseObj.query);
            // 重定向: 302
            res.statusCode = 302;
            console.log(res.socket.remoteAddress);
            res.setHeader("Location", "/");
            res.end();
        } else {
            fs.readFile('./views/404.html', function(err, data) {
                if (err) {
                    return res.end("404 Not Found");
                }
                res.end(data);
            })
        }
    })
    .listen(3000, function() {
        console.log("running...");
    })