const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');

//Templating
app.set('view engine', 'ejs');


//Static files serving
app.use(express.static('./public'));

//Controller
todoController(app);

app.listen('8000');
console.log('Listing to port 8000');