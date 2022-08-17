const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = [{id: 1, product: 'Bat'}, {id: 2, product: 'Ball'}, {id: 3, product: 'laptop'}, {id: 4, product: 'Macbook'}];

app.use(bodyParser.urlencoded({extended: false}));

app.get('/items', (req, res) => {
    if(items) {
        res.send(item);
    } else{
        res.send('List is empty')
    }
});

app.post('/items', (res,req) => {
    var item = req.bosy;
    item.push(item);
    res.send('item added in the list');
});

app.get('/item/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.send(item);
    } else {
        res.send('Item is not available')
    }
});

app.patch('/items/:id', (req, res) => {
    var item = items.findIndex(item => item.id == req.params.id);
    if (items[item]) {
        items[item].product = req.body.product;
        res.send('Item is updated')
    } else {
        res.send('item is not available');
    }
});

app.delete('items/id:', (req, res) => {
    const itemId = parseInt(req.params.id);
    var item = items.find(item => item.id == itemId);
    if(item) {
        items.splice(items.indexOf(item), 1);
        res.json(items);
    } else {
        res.send('Item is not available');
    }
});

app.listen(3000, console.log('Listening on port 3000'));