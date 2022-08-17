var express = require('express');

var app =express();

app.get('/', function(req, res){
    res.send('this is home page');
})

app.get('/contact', function(req, res){
    res.send('this is contact page');
}) 

app.get('/profile/:id', function(req, res){
    res.send('you requested to see profile with id of' + req.params.id);
});

app.listen(3000); 