var serialize = function(name, val, opt) {
    var pairs = [name + '=' + encodeURI(val)];
    opt = opt || {};

    if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
    if (opt.domain) pairs.push('Domain=' + opt.domain);
    if (opt.path) pairs.push('Path=' + opt.path);
    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push('HttpOnly');
    if (opt.secure) pairs.push('Secure');

    return pairs.join('; ');
}
// 略改前文的访问逻辑,我们就能轻松地判断用户的状态了
var handle = function(req, res) {
    if (!req.cookie.isVisit) {
        res.setHeader('Set-Cookie', serialize('isVisit', '1'));
        res.writeHead(200);
        res.end('动物园再次欢迎你');
    }
};