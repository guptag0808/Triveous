const mongoose= require('mongoose')
const productSchema = new mongoose.Schema({
	title: {
	  type: String,
	  required: true,
	},
	description: String,
	price: {
	  type: Number,
	  required: true,
	},
	category: {
	  type: mongoose.Schema.Types.ObjectId,
	  ref: "category",
	  required: true,
	},
	availability: {
	  type: Boolean,
	  default: true, 
	},
  },{versionKey:false});
  
  const ProductModel = mongoose.model("Product", productSchema);
  
  module.exports = {ProductModel};