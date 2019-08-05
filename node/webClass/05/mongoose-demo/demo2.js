var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// 连接数据库(本机的itcast)
// 当插入第一条数据之后,自动创建
mongoose.connect("mongodb://localhost/itcast")

// 设计集合结构(表结构)
var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

var User = mongoose.model("User", userSchema);

// var admin = new User({
//     name: 'node',
//     password: '123456',
//     email: '1@admin.com'
// })

// admin.save(function(err, ret) {
//     if (err) {
//         console.log("保存失败\t", err);
//     } else {
//         console.log("保存成功\n", ret);
//     }
// })


// 按条件查询
// User.find({ name: "node" }, function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// 删除
// User.remove({
//     name: "node"
// }, function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// 更新
User.findByIdAndUpdate("5d46c6301ecc6e2860a83418", { password: "123" }, function(err, data) {
    if (err) {
        console.log("更新失败\n", err);
    } else {
        console.log("更新成功\n", data);
    }
})