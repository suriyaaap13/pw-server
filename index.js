require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', require('./routes'));

app.listen(3001, (err)=>{
    if(err){
        console.log('Error in running the server ', err);
        return;
    }
    console.log('Server is up and running in port 3000');
});   