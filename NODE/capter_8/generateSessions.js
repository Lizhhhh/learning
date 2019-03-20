var sessions = {};
var key = 'session_id';
var EXPIRES = 20 * 60 * 1000;

var generate = function() {
    var session = {};
    session.id = (new Date()).getTime() + Math.reandom();
    session.cookie = {
        expire: (new Date()).getTime() + EXPIRES
    };
    session[session.id] = session;
    return session;
};
// 每个请求到来时,检查Cookie中的口令与服务器端的数据,如果过期,就重新生成,如下所示
(function(req, res) {
    var id = req.cookies[key];
    if (!id) {
        req.session = generate();
    } else {
        var session = sessions[id];
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
            // 如果session过期或口令不对, 重新生成session
            req.session = generate();
        }
    }
    handle(req, res);
}())

//     当然仅仅重新生成Session还不足以完成整个流程,还需要在响应给客户端时设置新的指,以
// 便下次请求时能够对应服务器端的数据。这里我们hack响应对象的writeHead()方法,在它的内部
// 注入设置Cookie的逻辑,如下所示:
var writeHead = res.writeHead;
res.writeHead = function() {
    var cookies = res.getHeader('Set-Cookie');
    var session = serialize(key, req.session.id);
    cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session];
    res.setHeader('Set-Cookie', cookies);
    return writeHead.apply(this, arguments);
};

var handle = function(req, res) {
    if (!req.session.isVisit) {
        req.session.isVisit = true;
        res.writeHead(200);
        res.end('欢迎第一次来到动物园');
    } else {
        res.writeHead(200);
        res.end('动物园再次欢迎你!');
    }
};