const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true     
    },
    email: {
        type: String,
        required: true, 
        trim: true,
        lowercase: true, 
        match: [/.+@.+\..+/, 'Please fill a valid email address'] 
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    isResponsed: {
        type: Boolean,
        default: false
    }
},{ timestamps: true });

module.exports = model("UserMessage", userSchema);
