/**
 * 以user/setting/12/1987为例,他会按约定去找controllers目录下的user文件,将其require出来后,调用整个文件模块的setting()方法,而其余的值作为参数直接传递给这个方法
 *
 */
(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var paths = pathname.split('/');
    var controller = paths[1] || 'index';
    var action = paths[2] || 'index';
    var args = paths.slice(3);
    var module;
    try {
        // require的缓存集之使得只有第一次是阻塞的
        module = require('./controllers/' + controller);
    } catch (ex) {
        handle500(req, res);
        return;
    }
    var method = module[action]
    if (method) {
        method.apply(null, [req, res].concat(args));
    } else {
        handle500(req, res);
    }
})