const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose');
require("dotenv").config();
const port = process.env.port || 3000;

mongoose.set('strictQuery', false); 

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
//local uri
//const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers";

//cluster Uri
const DATABASE_URL=process.env.DATABASE_URI;

mongoose.connect(DATABASE_URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    
});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
