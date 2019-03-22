(function(req, res) {
    var id = req.cookies[key];
    if (!id) {
        req.session = generator();
        handle(req, res);
    } else {
        store.get(id, function(err, session) {
            if (session) {
                if (session.cookie.expire > (new Date()).getTime()) {
                    // 更新超时时间
                    session.cookie.expire = (new Date()).getTime() + EXPIRES;
                    req.session = session;
                } else {
                    // 超时了,删除旧的数据,并重新生成
                    delete sessions[id];
                    req.session = generate();
                }
            } else {
                // 如果session过期或口令不对,重新生成session
                req.session = generate();
            }
            handle(req, res);
        })
    }
})()

// 在响应时,将新的session保存回缓存种,如下所示:
var writeHead = res.writeHead;
res.writeHead = function() {
    var cookies = res.getHeader('Set-Cookie');
    var session = serialize('Set-Cookie', res.session.id);
    cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session];
    res.setHeader('Set-Cookie', cookies);
    // 保存回缓存
    store.save(req.session);
    return writeHead.apply(this, arguments);
};