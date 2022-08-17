const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const inventory = require('../model/inventory');

const app = express();
const router = express.Router();
router.use(bodyParser.json()); //to read in json

router.get('/Inventory', (req, res) => {
    inventory.find({}).then((fruits) => {
        res.send(fruits)
    }).catch((err) => {
        console.log(err.message);
    });
});

router.get('/Inventory/:item', (req, res) => {
    inventory.find({name: req.params.item}).then((item) => {
        if(item){
            res.status(200).send(item)
        } else{
            res.send('no item found')
        }
    })
})

router.post('/Inventory', (req,res)=>{
    // console.log(req.body)
    inventory.create(req.body)
    .then((item)=>{
        res.status(201).send(item)
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

router.put('/Inventory', (req,res)=>{
    req.body.forEach((item)=>{
        inventory.findOneAndUpdate({name:item.name}, item)
    })
})

router.put('Inventory/:item', (req,res)=>{
    inventory.findOneAndUpdate({name:req.params.item}, req.body)
    .then(()=>{
        inventory.findOne({name:req.params.item}).then(function(item){
            res.send(item)
        }) 
    })
    .catch((err)=>{
        console.log(err.message)
    })
})


router.delete('Inventory/:item', (req,res)=>{
    inventory.deleteOne({ name: req.params.item})
    .then((item)=>{
        res.send('Item deleted Successfully')
    })
    .catch((err)=>{
        console.log(err.message)
    })
})

module.exports = router;