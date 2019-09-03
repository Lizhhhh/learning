const http = require('http');
const url = require('url')

const server = http.createServer();

server.on('request', function(req, res) {
    let { pathname, query } = url.parse(req.url);
    if (pathname === '/getscript') {
        let methods = query.split('=')[1];
        var scriptStr = methods + '()';
        res.end(scriptStr);
    } else {
        res.end('404');
    }
})

server.listen(3000, function() {
    console.log("server listen at http://127.0.0.1:3000");
})