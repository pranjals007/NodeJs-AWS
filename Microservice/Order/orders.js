const express = require('espress');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Pranjal7:Pranjal@pranjal.xdgzb.mongodb.net/orderservice', () => {
    console.log('Database connected- orders');
});

require('./Order');
const Order = mongoose.model('Order');

app.post('/order', (req, res) => {

    var newOrder = {
        CustomerID: mongoose.Types.ObjectId(res.body.CustomerID),
        BookID: mongoose.Types.ObjectId(req.body.BookID),
        InitialDate: req.body.InitialDate,
        deliveryDate: req.body.deliveryDate
    }

    var order = new order(newOrder);

    order.save().then(() => {
       res.send("Order creaeted sccuess");
}).catch((err) => {
    if(err){
        throw err;
    }
})
console.log('testing out');
})


app.listen('7777', () => {
    console.log('up and recieving - order service ');
})