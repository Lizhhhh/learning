// 下面是根据内容生成散列值的方法:
var getHash = function(str) {
    var shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('base64');
};

// 与If-Modified-Since/Last-Modified不同的是,ETag的请求和响应是If-None-Match/ETag
var handle = function(req, res) {
    fs.readFile(filename, function(err, file) {
        var hash = getHash(file);
        var noneMatch = req.headers['if-none-match'];
        if (hash === noneMatch) {
            res.writeHead(304, "Not Modified");
            res.end();
        } else {
            res.setHeader("ETag", hash);
            res.writeHead(200, "Ok");
            res.end(file);
        }
    });
};