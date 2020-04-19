const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const Con = require('../models/connection');
const todo = require('../models/Todo');

Con();
console.log(todo);

module.exports = (app) => {
    app.get('/todo',(req, res) => {
        Todo.find({}, (err, data) => {
            res.render('todo',{todos:data});
        });
    });

    app.post('/todo',urlencodedParser,(req, res) => {
        const newToDO = Todo(req.body).save((err,data) => {
            if(err) alert(err);
            res.json(data);
        });
    });

    app.delete('/todo/:todo',(req, res) => {
        Todo.find({item: req.params.todo.replace(/\-/g," ")}).remove((err,data) => {
            if(err) alert(err);
            res.json(data);
        })
    });
};