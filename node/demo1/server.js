var http = require('http');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = request.url;
        if (pathname === '/favicon.ico') {
            // console.log('ignore');
        } else {
            route(handle, pathname, response, request)
        }
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;