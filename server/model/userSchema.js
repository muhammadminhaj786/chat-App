const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    full_Name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

})

const userModel = mongoose.model('user',schema);
module.exports = userModel;