// 手工映射除了需要手工配置路由较为原始外,它对URL的要求十分灵活


// 假设已经拥有了一个处理设置用户信息的控制器:
exports.setting = function (req, res) {
  //TODO
};

// 给映射添加一个叫use的方法
var routes = [];

var use = function(path, action) {
  routes.push([path, action]);
};

// 我们在入口程序中判断URL,然后执行对应的逻辑,于是旧完成了基本的路由映射过程
( function (req, res) {
  var pathname = url.parse(req.url).pathname;
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    if (pathname === route[0]) {
      var action = route[1];
      action(req, res);
      return ;
    }
  }
  // 处理404请求
  handle404(req, res);
})()

// 手工映射十分方便,由于它对URL十分灵活,所以我们可以将两个路径都映射到相同的业务逻辑
use('/user/setting', exports.setting);
use('/setting/user', exports.setting);
// 甚至
use('/setting/user/jacksontian', exports.setting);

