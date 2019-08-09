var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test", { useMongoClient: true })


var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        // 注意: 不要写 Date.now() 否则会即可调用.故默认的创建时间都是同一个
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        defalut: '/public/img/avater-default.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        // 0 没有限制
        // 1 不可以评论
        // 2 不可以登录
        // 是否可以评论
        // 是否可以登录使用
        enum: [0, 1, 2]
    }
})

module.exports = mongoose.model("User", userSchema); // 注 User 对应 users