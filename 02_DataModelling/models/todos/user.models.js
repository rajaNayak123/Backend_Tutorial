import mongoose from 'mongoose';

// To create a Schema object
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps:true});


export const User = mongoose.model("User", userSchema);

/* 
Note: whenever User goes into the database it convert lowercase and plural like 👉 "users"
*/