const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser')
const cors = require('cors');

const db=require('./database/db');
const user_route=require('./routes/user_route');
const doctor_route=require('./routes/doctor_route');
const app_route=require('./routes/app_route');



const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/public', express.static(__dirname + '/public'));


app.use(user_route);
app.use(doctor_route);
app.use(app_route);

app.listen(90);
