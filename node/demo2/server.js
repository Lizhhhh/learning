var http = require('http')
var genHeader = require('./genHeader');


function onRequest(request, response) {
    var pathname = request.url;
    if (pathname === '/favicon.icon') {

    } else {
        genHeader.c200plain(response, 'Hello node');
    }
}