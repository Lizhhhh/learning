const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// 连接数据库并设置表的样式
mongoose.connect("mongodb://localhost/marron");
var Schema = mongoose.Schema;
var testSchema = new Schema({
    msg: {
        type: String
    }
})
var Test = mongoose.model("Test", testSchema);


app.engine("html", require("express-art-template")); // 模板引擎配置



// 处理POST请求(使用body-parse) (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router); // 路由挂载

router.get("/student/new", function(req, res) {
    res.render("new.html", {
        msg: "Hi art-template"
    })
})

router.post("/student/new", function(req, res) {
    console.log(req.body);
    new Test(req.body).save(function(err) {
        if (err) {
            return res.status(500).send("Server error.");
        }
        res.send("插入成功!");
    })
})


app.listen(3000, function() {
    console.log("Server runinig");
})