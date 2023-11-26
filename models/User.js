const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    email: { 
        type: String, 
        unique: true, 
        required: true },
    password: { 
        type: String, 
        required: true },
    fullName: String,
    image:{
        type:String,
        default:'https://res.cloudinary.com/dyto7dlgt/image/upload/v1691526692/project3/avatar_h1b0st.jpg'
    },
    member:{
        type:Boolean,
        default:false
    }
    },
    {
        timestamps:true
    }
  );
  
  module.exports = model("User", userSchema);