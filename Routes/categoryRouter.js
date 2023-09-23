const express= require('express')
const {CategoryModel} = require('../model/categoryModel')
const categoryRouter= express.Router()

categoryRouter.post("/add",async(req,res)=>{
	 const{name} =  req.body
   try{
	console.log(name)
	const isPresent = await CategoryModel.findOne({ name });
	if(isPresent){
		return res.status(409).json({"msg":"Category Item Is Allready Present"})
	}
	const item =  new CategoryModel({name})
	 await item.save()
	 res.status(201).json({"msg":"Successfully Added","item":item})
   }catch(err){
	res.status(500).send("INternal server Error")
	console.log(err.message)

   }
})

categoryRouter.get("/",async(req,res)=>{
  try{
	const allItem= await CategoryModel.find()
	res.status(200).json({"AllItem":allItem})
  }catch(err){
	console.log(err.message)
  }
})




module.exports={categoryRouter}