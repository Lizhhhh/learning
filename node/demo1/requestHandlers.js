var fs = require('fs'),
    formidable = require('formidable');

// 根据url获取本地的html(buffer)
function getHTML(url) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(data)
            }
        })
    })
    return promise;
}


function start(response) {
    let url = './start.html';
    let html = getHTML(url);
    html.then((body) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(body);
        response.end();
    }, (err) => {
        console.log(err);
    })
}



function upload(response, request) {
    var form = new formidable.IncomingForm();
    form.uploadDir = 'temp';
    form.parse(request, (err, fields, files) => {
        fs.renameSync(files.upload.path, "./temp/test.png");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("received image:<br />");
        response.write("<img src='/show' />");
        response.end();
    })
}

function show(response) {
    let url = "./temp/test.png";
    fs.readFile(url, "binary", (err, file) => {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(err + '\n');
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "image/jpg" });
            response.write(file, "binary");
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;