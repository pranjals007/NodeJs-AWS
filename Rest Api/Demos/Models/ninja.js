const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema n model 
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name filed is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }
});
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;