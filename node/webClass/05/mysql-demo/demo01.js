var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'users'
});

connection.connect();

connection.query('INSERT INTO users VALUES(null,"admin","123456")', function(error, results, fields) {
    if (error) throw error;
})

connection.query("SELECT * FROM `users`", function(error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
});


connection.end();