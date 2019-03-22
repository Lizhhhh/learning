var bytes = 1024;

(function(req, res) {
    var received = 0;
    var len = req.headers['content-length'] ? parseInt(req.headers['content-length'], 10) : null;

    // 如果内容超过长度限制, 返回请求实体过长的状态码
    if (len && len > bytes) {
        res.writeHead(413);
        res.end();
        return;
    }
    // limit
    req.on('data', function(chunk) {
        received += chunk.length;
        if (received > bytes) {
            // 停止接收数据, 触发end()
            req.destroy();
        }
    });
    handle(req, res);
})()