const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    item: String
});

module.exports = Todo = mongoose.model('Todo',todo);