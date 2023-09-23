const express= require('express')
const {ProductModel} = require('../model/productModel')
const productRouter = express.Router()

// Add New product to DB

productRouter.post("/add",async(req,res)=>{
	const {title,description,price,category,availability} = req.body;
	   try{
           const data = new ProductModel({title,description,price,category,availability})
		   await data.save()
		   res.status(201).send({"msg":"Product Add Successfully", "Product":data})
	   }catch(err){
          console.log(err.message)
	   }
})

// Fetch all the Product data 

productRouter.get("/",async(req,res)=>{
	try {
		const products = await ProductModel.find();
		res
		  .status(200)
		  .json({ msg: "Successfully get all products", data: products });
	  } catch (error) {
		console.log(error.message)
	  }
})

// Search the product by Category id

productRouter.get('/category/:categoryId', async (req, res) => {
	const categoryId = req.params.categoryId;
  
	try {
	  const products = await ProductModel.find({ category:categoryId });
	  res.status(200).json(products);
	} catch (error) {
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

//   Fetch All PRoduct Data By product id

productRouter.get('/product/:productId', async (req, res) => {
	const productId = req.params.productId;
  
	try {
	  const product = await ProductModel.findById(productId);
  
	  if (!product) {
		return res.status(404).json({ error: 'Product not found' });
	  }
  
	  res.json(product);
	} catch (error) {
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

module.exports={productRouter}