//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//On connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to the mongo Database');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in connection: '+err);
    }
});

//port no
const port = 3000;

//adding middleware
app.use(cors()); 

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//testing server
app.get('/',(req, res)=>{
    console.log('Client connected');
    res.send('foobar');
})

//Add the routes
app.use('/api',route);

app.listen(port, ()=>{
    console.log('Server started at port: '+port);
});
