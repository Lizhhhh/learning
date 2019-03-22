// 让浏览器知晓是否能直接使用本地版本
var handle = function(req, res) {
    fs.readFile(filename, function(err, file) {
        var expires = new Date();
        expires.setTime(expires.getTime() + 10 * 365 * 60 * 60 * 1000);
        res.setHeader("Expires", expires.toUTCString());
        res.writeHead(200, "Ok");
        res.end(file);
    });
};

// 考虑文件提前过期,或者到期后并没有被删除
var handle = function(req, res) {
    fs.readFile(filename, function(err, file) {
        res.setHeader("Cache-Control", "max-age=" + 10 * 365 * 24 * 60 * 60 * 1000);
        res.writeHead(200, "Ok");
        res.end(file);
    });
}; // 能够避免浏览器端与服务器端时间不同步带来的不一致性问题.
