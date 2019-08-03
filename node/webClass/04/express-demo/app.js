const express = require("express");

const app = express();

app.get("/", function(req, res) {
    console.log(req.socket.remoteAddress);
    res.send('hello world');
});
app.get("/login", function(req, res) {
    res.send(`
    <h1>Hello login</h1>
    `);
});
app.get("/about", function(req, res) {
    res.send('about page');
});

app.listen(3000, function() {
    console.log("server running...");
})