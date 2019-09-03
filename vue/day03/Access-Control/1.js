const http = require('http');
const url = require('url');


const server = http.createServer();

server.on('request', function(req, res) {
    let { pathname } = url.parse(req.url, true);
    if (pathname === '/getData') {
        let data = JSON.stringify({
            isSuccess: true,
            msg: [{
                name: '栗子',
                age: '18'
            }]
        })
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(data);
    }

})

server.listen(3000, function() {
    console.log("server is running at http://127.0.0.1:3000 !");
})