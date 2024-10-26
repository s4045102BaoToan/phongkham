const express = require('express');
const mongoose =  require('mongoose');
const session = require('express-sessiom');
const bodyParser = require('body-parser');
const path = require('path');
require('dotevn').config();
//create a mongo for dich vu items
const sessionConfigs = require('./configs/session');

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
app.use(cookieParser());

app.use(session(sessionConfigs));

// functions
a