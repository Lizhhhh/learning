var parse = new(less.Parser);

parser.pasrse('.class {width: 1+1}', function(err, tree) {
    if (err) { return console.log(err) }
    console.log(tree.toCSS());
});