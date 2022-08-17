const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./Book');
const Book = mongoose.model('Book');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Pranjal7:Pranjal@pranjal.xdgzb.mongodb.net/booksservice', () => {
    console.log('Database is connected');
});

app.get('/', (req, res) => {
    res.send('This is our main endpoint');
})

app.post('/book', (req, res) => {
    var newBook ={
        title:  req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }
    var book =new Book(newBook)

    book.save().then(() => {
        console.log("New book Created");
    }).catch((err) => {
        if(err){
            throw err;
        }
    });
    res.send("A new book created with success")
});

app.get('/books', (req, res) => {
    Book.find().then((books) => {
        res.json(books);
    }).catch(err => {
        if(err){
            throw err;
        }
    });
});

app.get('/books/:id',(req,res) => {
    res.send(req.params.id).then((book) => {

        if(book){
            res.json(book)
        } else{
            res.sendStatus(400);
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

app.delete('/book/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id).then(() => {
        res.send('Book removed with success')
    }).catch(err => {
        if(err){
            throw err;
        }
    })

})

app.listen(4545, () =>{
    console.log('up and running -- This is our Book service');
});