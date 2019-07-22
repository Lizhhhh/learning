var http = require('http');
var options = {
    hostname: '127.0.0.1',
    port: 1334,
    path: '/',
    method: 'GET'
}

var req = http.request(options, function(res) {
    console.log("STATUS: " + res.statusCode);
    console.log("HEADERS: " + JSON.stringify(res.stringify(res.headers)));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log(chunk);
    })
})

req.end();