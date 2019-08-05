const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// 配置插件 body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置使用art-template模板引擎
app.engine('html', require('express-art-template'));

app.use("/public/", express.static("./public/"));


var comments = [{
    name: "张三",
    message: "今天天气不错!",
    dateTime: "2019-08-03"
}]

app.get("/", function(req, res) {
    res.render('index.html', {
        comments: comments
    })
})

app.get("/post", function(req, res) {
    res.render("post.html")
})

app.post("/post", function(req, res) {
    let comment = req.body;
    comment.dateTime = "2019-08-03";
    comments.unshift(comment);
    res.redirect("/");
})

// app.get("/postComments", function(req, res) {
//     var comment = req.query;
//     comment.dateTime = "2019-08-03";
//     comments.unshift(comment);
//     res.redirect("/");
//     // res.setHeader("Location", "/");
//     // res.statusCode = 302; // 临时重定向;
//     res.end();
// })

app.listen(3000, function() {
    console.log("running...");
})