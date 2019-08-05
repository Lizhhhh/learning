const express = require("express");
const app = express();
const router = require("./router");
const bodyParser = require("body-parser");

// express-art-template配置
app.engine("html", require("express-art-template"));

// 配置可访问的静态资源
app.use("/public/", express.static("./public/"));
app.use("/node_modules/", express.static("./node_modules/"));

// 处理POST请求(使用body-parse) (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// 把路由容器挂载到app服务上
app.use(router);


app.listen(3000, function() {
    console.log("running...");
})