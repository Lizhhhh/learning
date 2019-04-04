/**
 * 可以像解析器传递参数
 */
var parser = new(less.Parser)({
    path: ['.', './lib'], // Specify search paths for @import directives
    filenames: 'style.less' // Specify a filename, for better error messages
});

parser.parse('.class { width: 1 + 1 }', function(e, tree) {
    tree.toCSS({ compress: true }); // Minify CSS output
});