const mongoose=require('mongoose')
const validators = require('validater')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
    type:String,
    required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        Validate:[validators.isEmail, "Invalid email"]
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})


const bookScehma=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:false
    },
    author:{
        type:String,
        required:true
    },
    count:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const users=mongoose.model("users", userSchema)
const books=mongoose.model("books",bookScehma)

module.exports= users
module.exports=books