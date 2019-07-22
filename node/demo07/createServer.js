var net = require('net');
var server = net.createServer();
server.on('connection', function(socket) {
    console.log("hi, welcome to my node TCP connection");
})

server.listen(8124, function() {
    console.log('server bound');
})