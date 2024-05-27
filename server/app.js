require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const app = express();
const cors = require('cors');
const router = require('./routes')
const PORT = 4001

//body parser mildleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// mongo connection
const DB_URL = mongoose.connect('mongodb+srv://eb20103087minhajwahid:Hania12@cluster0.cxevbnz.mongodb.net/')
mongoose.connection.on('connected',()=>{console.log('mongo connected sucessfuly')})
mongoose.connection.on('error',(err)=>{console.log('mongo connected sucessfuly',err.message)})


//app route
app.use(router)

//check 
app.get('/',(req,res)=>{
    res.json({
        message: 'server up'
    })
})



app.listen(PORT,()=>{
    console.log('server is runing on port 4001')
})