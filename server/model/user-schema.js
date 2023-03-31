import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    firstname:{
        type: String,
        requried: true,
        trim: true,
        min:5,
        max:20
    },
    lastname:{
        type: String,
        requried: true,
        trim: true,
        min:5,
        max:20
    },
    username:{
        type: String,
        requried: true,
        trim: true,
        unique:true,
        min:5,
        max:20
    },
    email:{
        type: String,
        requried: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        requried: true,
    }
})

const user = mongoose.model('user',userschema);

export default user;