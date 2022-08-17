const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema and model 
const InventorySchema =new Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;