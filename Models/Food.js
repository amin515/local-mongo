
// create food schema

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    }
    


})

module.exports = mongoose.model("Food", foodSchema);