var handle = function(req, res) {
    fs.stat(filename, function(err, stat) {
        var lastModified = stat.mtime.toUTCString();
        if (lastModified === req.headers['if-modified-since']) {
            res.writeHead(304, 'Not Modified');
            res.end();
        } else {
            fs.readFile(filename, function(err, file) {
                var lastModified = stat.mtime.toUTCString();
                res.setHeader("Last-Modified", lastModified);
                res.writeHead(200, "Ok");
                res.end(file);
            });
        }
    });
};