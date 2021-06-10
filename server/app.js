const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/blogDb';

//const User = require('./model/user');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

const users = require("./routes/users")


//app.use('/users',users);

//I added
app.get("/",(req,res)=>{
	res.send('meka weda yako');
})


app.listen(3000, () => console.log('Blog server running on port 3000!'));