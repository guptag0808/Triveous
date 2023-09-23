const mongoose = require('mongoose')

const categorySchema= new mongoose.Schema({
	name:{type:String,required:true,unique:true},
	
},{ versionKey: false })

const CategoryModel= mongoose.model('category',categorySchema)
module.exports={CategoryModel}