const http = require('http');
const querystring = require('querystring');

// 侦听服务器的request事件
http.createServer(function(req, res) {
    let postData = '';
    req.setEncoding('utf8');
    // 侦听请求的data事件
    req.on('data', function(chunk) {
        postData += chunk;
    });
    // 侦听请求的end事件
    req.on('end', function() {
        res.end(postData)
    });
}).listen(8080);
console.log('服务器启动完成');