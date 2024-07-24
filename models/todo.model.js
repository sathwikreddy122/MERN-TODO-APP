const { text } = require('express');
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text : {
        type : String,
        require : true
    }
});

const Todo = mongoose.model('ToDoList', todoSchema);
module.exports = Todo;