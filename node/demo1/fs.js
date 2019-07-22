const fs = require('fs');
fs.readFile('../demo1', function(err, file) {
    if (err) {
        console.error(err);
    } else {
        console.log(file);
        console.log("读取事文件完成")
    }
})
console.log("发起读取文件");