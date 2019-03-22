var parseCookie = function(cookie) {
    var cookies = {};
    if (!cookie) {
        return cookies;
    }
    var list = cookie.split(';');
    for (var i = 0; i < list.length; i++) {
        var pair = list[i].split('=');
        cookies[pair[0].trim()] = pair[1];
    }
    return cookies;
};
// 在业务逻辑代码执行之前,我们将其挂载在req对象上,让业务代码可以直接访问,如下所示
(function(req, res) {
    req.cookie = parseCookie(req.headers.cookie);
    handle(req, res);
}());
// 这样我们的业务代码就可以进行判断处理了
var handle = function(req, res) {
    res.writeHead(200);
    if (!req.cookies.isVisit) {
        res.end('欢迎第一次来到动物园');
    } else {
        //TODO
    }
}