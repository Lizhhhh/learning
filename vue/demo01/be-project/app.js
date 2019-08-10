const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const todos = [{
        id: 1,
        title: "吃饭"
    },
    {
        id: 2,
        title: "吃饭"
    },
    {
        id: 3,
        title: "吃饭"
    }
]

app.get('/todos', (req, res) => {
        res.json(todos);
    })
    .post('/todos', (req, res) => {
        let todo = {
            title: req.body.title,
            id: todos[todos.length - 1].id + 1
        }
        todos.push(todo)
        res.json(todo)
    })
    .patch('/todos/:todoId', (req, res) => {

    })
    .delete('/todos/:todoId', (req, res) => {

    })

app.listen(3000, () => console.log('api server running 3000.'));