/**
 * 使用
 * 只要安装了LESS,就可以在Node中像这样调用编译器
 */
var less = require('less');

less.render('.class { width: 1 + 1 }', function(e, css) {
    console.log(css);
});

/**
 * 上面会输出
 * .class {
 *     width: 2;
 * }
 */

/**
 * 你也可以手动调用解析器和编码器：
 */
var parser = new(less.Parser);

parser.parse('.class {width: 1+1 }', function(err, tree) {
    if (err) { return console.error(err) }
    console.log(tree.toCSS());
});