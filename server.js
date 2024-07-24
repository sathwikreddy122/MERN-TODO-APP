const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/todo.model.js')

const app = express();

//Middlewares
app.use(express.json());

//connecting to the MongoDB database.
mongoose.connect('mongodb+srv://venkatasathwik12604:2qups0xIpgVHWOnC@todoapp.vqmhldi.mongodb.net/?retryWrites=true&w=majority&appName=ToDoApp')
.then(() => {
    console.log("connected to database");
    //Server listening
    app.listen(3000, (req, res) => {
        console.log("server is listening");
    })
})
.catch(() => {
    console.log("Failed to connect the database");
})

//Sending basic responce to the client through json formate.
app.get('/', (req, res) => {
    res.json({message : "Sending responce to the client...!"});
})

//Adding data to the MongoDB database.
app.post('/api/todos', async (req, res) => {
    try{
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);
    }
    catch(error){
        res.status(500).json({message : errormessage});
    }
})
