// 它的原理是检查请求的查询字符串,如果没有值,会生成新的带值得URL
var getURL = function(_url, key, value) {
    var obj = url.parse(_url, true); // 返回一个json字符串
    obj.query[key] = value;
    return url.format(obj);
}

// 然后形成跳转,让客户端重新发起请求:
((function(req, res) {
    var redirect = function(url) {
        res.setHeader('Location', url);
        res.writeHead(302);
        res.end();
    };
    var id = req.query[key];
    if (!id) {
        var session = generate();
        redirect(getURL(req.url, key, session.id));
    } else {
        var session = sessions[id];
        if (session) {
            if (session.cookie.expire > (new Date()).getTime()) {
                // 更新超时时间
                session.cookie.expire = (new Date()).getTime() + EXPIRES;
                res.session = session;
                handle(req, res);
            } else {
                // 超时了,删除旧得数据,并重新生成
                delete sessions[id];
                var session = generate();
                redirect(getURL(req.url, key, session.id));
            }
        } else {
            // 如果session过期或口令不对,重新生成sessison
            var session = generate();
            redirect(getURL(req.url, key, session.id));
        }
    }
})())