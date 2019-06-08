const mongoose = require('mongoose');


const ContactSchema= mongoose.Schema({
    first_name:{
        type: String,
        require : true
    },
    last_name:{
        type: String,
        required: true
    },
    contact_no:{
        type: String,
        required: true
    }
});

const contact = module.exports= mongoose.model('Contact',ContactSchema);