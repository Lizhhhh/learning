const express = require('express')
const app = express()

app
.get('/', function(req, res) {
    res.send('Hello World!')
})
.get('/about', function(req, res) {
    res.send('你好 i`m TJ');
})

app.listen(3000, function() {
    console.log("Example app listening on port 3000");
})