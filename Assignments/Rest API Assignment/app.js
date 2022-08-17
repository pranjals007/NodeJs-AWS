const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();
app.use(routes);

mongoose.connect('mongodb+srv://Pranjal7:Pranjal@pranjal.xdgzb.mongodb.net/FruitBasket', () => {
    console.log('Database is connected Successfuly');
});


mongoose.promise = global.Promise;

app.listen(3000, () => {
    console.log('port 3000 is listening');
});