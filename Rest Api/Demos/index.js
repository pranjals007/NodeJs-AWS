const express = require('express')
const routes = require('./Routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Pranjal7:Pranjal@pranjal.xdgzb.mongodb.net/NodeJs')
mongoose.Promise == global.process;
app.use(bodyParser.json());

app.use('/api',routes);

//err handeling
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(404).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log('now listening to requests');
});


