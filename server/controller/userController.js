
const books = require('../models/userSchema');
const users=require('../models/userSchema');
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log("INSIDE THE REGISTER FUNCTION")
    const {name,gender,age,address,email,password}=req.body
    const profile=req.file.filename

    try{
        const existingUser=await users.findOne({email})

        if(existingUser){
            console.log("EXISTING USER")
            res.status(406).json("existing user")
        }else{
            const newUser=new users({name,gender,age,address,email,password,profile})
            await newUser.save()
            console.log(newUser)
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(400).json("SOMETHING WENT WRONG"+err)
    }
}

exports.login=async(req,res)=>{
    console.log("INSIDE THE LOGIN FUNCTION")
    const {email,password}=req.body
    
try{
    const user=await users.findOne({email,password})

    console.log(email,password,req._id)

        if(user && user.isAdmin===false){
            const token=jwt.sign(email, 'secretkey')
            res.status(200).json({
                user,
                token,
                role:'student'
            })
        }else if(user && user.isAdmin===true){
            const token=jwt.sign(email, 'secretkey')
        res.status(200).json({
            user,
            token,
            role:'admin'
           })}else{
        console.log("INVALID EMAIL OR PASSWORD")
    }}
    catch(err){
        res.status(400).json("SOMETHING WENT WRONG" +err)
    }
}

// function for adding books
exports.addBook=async(req,res)=>{
    console.log("INSIDE THE BOOK ADDING FUNCTION")
    const {title,description,author,count,category}=req.body
    const cover=req.file.filename
    console.log(title)
    console.log("book",`${title,cover}`)

    try{
        const existingBook=await books.findOne({title})

        if(existingBook){
            console.log("EXISTING BOOK")
            res.status(406).json("existing book")
        }else{
            const newBook=new books({title,description,author,count,category,cover})
            await newBook.save()
            console.log(newBook)
            res.status(200).json(newBook)
        }
    }catch(err){
        res.status(400).json("SOMETHING WENT WRONG"+err)
    }
}

exports.viewBook=async(req,res)=>{
    console.log("INSIDE THE VIEW FUNCTION")
try{
    const result=await books.find()
    res.status(200).json(result)
}catch(err){
    res.status(400).json("SOMETHING WENT WRONG"+err)
}
}
