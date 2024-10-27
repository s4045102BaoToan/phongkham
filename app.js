const express = require('express');
const mongoose =  require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
//create a mongo for dich vu items
const sessionConfigs = require('./configs/session');
const { error } = require('console');
const { Dichvu } = require('./model');

const app = express();
const db = process.env.DATABASE;
console.log(`Database has been connected ${db}`);

mongoose.connect(db)
    .then(() => console.log('Connected successfully to the database !'))
    .catch((error) => console.log(`ERROR CONNECTING TO DATABASE !!! ${error}`));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(session(sessionConfigs));

// functions

// index
app.get("/", async(req, res) => {
    try{
        res.render('index');
    }
    catch(error){
        res.status(500).send(error);
    }
});
// dich vu
app.get('/dichvu', async(req, res) => {
    try{
        const dichvuArray = await Dichvu.find();
        // console.log(dichvuArray);
        res.render('dichvu', {dichvuArray});
        
    } catch(error){
        res.status(500).send(error);
    }
})

//PORT listening 
const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});