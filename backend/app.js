const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

//Database
const db = require('./api/config/database')

var cors = require('cors');
const Contact = require('./api/models/contact');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err))

// Body-parser 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors('*')) //Use this after the variable declartion 

// Index route 
app.get('/', (req, res) => res.send('INDEX'));

// contact routes 
const contactRoutes = require('./api/routes/contacts');
const chatRoutes = require('./api/routes/chats');

// morgan to display log in terminal
app.use(morgan('dev'));

// Routes which should handle requests
app.use('/contacts', contactRoutes);
app.use('/chats', chatRoutes);


//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on port ${PORT}'));


