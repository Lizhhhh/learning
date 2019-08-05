var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useMongoClient: true });
mongoose.Promise = global.Promise;

var Cat = mongoose.model("Cat", { name: String });

for (var i = 0; i < 100; i++) {
    var kitty = new Cat({
        name: "Zildjian" + i
    })

    kitty.save(function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("meow");
        }
    })
}