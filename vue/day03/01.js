const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer();

const __MSG = [{
        id: 1,
        name: '五菱宏光',
        ctime: new Date()
    },
    {
        id: 2,
        name: '法拉第',
        ctime: new Date()
    },
    {
        id: 3,
        name: '保时捷',
        ctime: new Date()
    }
]

server.on('request', function(req, res) {
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === '/getAllList') {
        let params = JSON.stringify({
            state: 200,
            msg: __MSG
        })
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(params);
    }
    if (pathname === '/addProduct') {
        var data = '';
        req.on('data', function(res) {
            data += res;
        })
        req.on("end", function() {
            data = qs.parse(data);
            let item = {
                id: __MSG.length + 1,
                name: data.name,
                ctime: new Date()
            }
            __MSG.push(item);
            let params = JSON.stringify({
                state: 200,
                msg: __MSG
            })
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.end(params);
        })
    }
    if (pathname === '/delProduct') {
        var data = '';
        req.on('data', function(res) {
            data += res;
        })
        req.on('end', function() {
            data = qs.parse(data);
            let index = __MSG.findIndex((item) => {
                return item.id === parseInt(data.id)
            })
            __MSG.splice(index, 1);
            let params = JSON.stringify({
                state: 200
            })
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.end(params);

            // res.end({ state: 200 });
        })
    }
})

server.listen(3000, function() {
    console.log('server is running at http://127.0.0.1:3000 day3-01.js');
})