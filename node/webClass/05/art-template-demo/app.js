const express = require("express");
const app = express();
const router = express.Router();
app.engine("html", require("express-art-template"));
app.use(router);

router.get("/student/new", function(req, res) {
    res.render("new.html", {
        msg: "Hi art-template"
    })
})

app.listen(3000, function() {
    console.log("Server runinig");
})