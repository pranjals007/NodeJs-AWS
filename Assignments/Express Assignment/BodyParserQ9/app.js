var fs = require('fs');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.get('/', (req, res)=>{
    try {
        var content = fs.readFileSync('Q9.txt','utf8');
        try {
            res.send(JSON.parse(content));
        } catch (error) {
            res.send('Json Parsing Error');
        }
    } catch (error) {
        res.send('Error while reading file');
    }

    
});

app.listen(3000, () => {
    console.log('Successfully Running on port 3000')
});