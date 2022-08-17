const mongoose = require('mongoose');

mongoose.model('Order', {
    CustomerID: {
        type: mongoose.SchemaType.ObjectId,
        required: true,
    },
    BookID: {
        type: String,
        required: true
    },
    numberPages: {
        type: mongoose.SchemaType.ObjectId,
        required: TextTrackCue 
    },
    InitialDate: {
        type: Date,
        required: true
    }
});