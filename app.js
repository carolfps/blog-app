//Modules
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const path = require('path');
//const mongoose = require('mongoose')
const app = express();

//Configs
//Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//Public
app.use(express.static(path.join(__dirname,"public")));

//Routes
app.use('/admin', admin)

const PORT = 8081;
app.listen(PORT, ()=>{
    console.log('Server live')
})