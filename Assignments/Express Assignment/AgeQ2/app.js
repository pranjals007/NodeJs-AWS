var express = require('express');

var app = express();

app.get('./', function(req, res){
    res.send('home');
});

app.get('/year', function(req,res){

    res.set({'Content-Type': 'text/plain; charset=utf8'});
    const age =req.query.age;
    let year = 2022 - age;
    res.send(`your birth year is ${year}`);
});

app.listen(3000);
console.log("Listening to port 3000");

