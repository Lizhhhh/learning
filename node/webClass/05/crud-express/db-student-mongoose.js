var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/itcast");

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: String
    },
    hobbies: {
        type: String
    }
})

// 直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema);