const http = require('http');
// url 帮助解析请求路径
const url = require('url');

const server = http.createServer();

server.on('request', function(req, res) {
    // 解构赋值
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === '/tryjsonp') {

        // 返回给前端的数据
        let params = JSON.stringify({
            name: '栗子',
            major: 'web开发'
        })

        // 模板字符串
        var scriptStr = `${query.callback}(${params})`;
        res.end(scriptStr);
    } else {
        res.end('404');
    }
})

server.listen(3000, function() {
    console.log("server listen at http://127.0.0.1:3000");
})