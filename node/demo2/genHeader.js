function c200plain(response, body) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write(body)
    response.end()
}


exports.c200plain = c200plain;