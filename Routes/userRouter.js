const express= require('express')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const {UserModel}= require('../model/user')
require('dotenv').config()
const userRouter = express.Router()

userRouter.post('/register',async(req,res)=>{
	const {name,email,pass,mobile} = req.body;
 try{
   const  existingUser = await UserModel.findOne({email})
   if( existingUser){
	return res.status(400).json({ message: 'User already exists' });
   }
   const hashedPassword = await bcrypt.hash(pass, 4);
  
   const newUser = new UserModel({name,email,pass:hashedPassword,mobile})
   await newUser.save();
    res.status(201).json({ message: 'Registration successful' ,"User":newUser});

 }catch(err){
	console.log(err)
 }
})

userRouter.post('/login',async(req,res)=>{
	const {email,pass} =req.body;
	try{
    const user =await UserModel.findOne({email})
	if (!user) {
		return res.status(401).json({ message: 'Authentication failed' });
	  }
	  
	  const passwordMatch=await bcrypt.compare(pass, user.pass) 
	  if (!passwordMatch) {
		return res.status(401).json({ message: 'Authentication failed' });
	  }
	   const token =jwt.sign({userID:user._id},process.env.secretKey,{ expiresIn: "7d" })
	   res.status(200).json({"msg":"Login Successfull","token":token})
	}catch(err){
		console.log(err.message)
		res.status(500).json({ message: 'Server error' });
	}
})

module.exports={
	userRouter
}