const express = require('express');
const cartRouter = express.Router();
const {CartModel} = require('../model/cartModel');
const {ProductModel} = require("../model/productModel")
const {authentication} = require('../middleware/authentication')

// Add a product to the cart
cartRouter.post('/add', async (req, res) => {
  const { userId, productId, quantity } = req.body;
   
  try {
    let cart = await CartModel.findOne({ userId });
     const product = await ProductModel.findById({_id:productId})
	 const price = product.price
	 
    if (!cart) {
      cart = new CartModel({ userId, items: [] });
	  
    }
    // Check if the product already exists in the cart
    const existingItem = cart.items.find(item => item.productId.equals(productId));
     
    if (existingItem) {
      // Update quantity if the product is already in the cart
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity,price });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
	console.log(error.message)
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get All Cart Item

cartRouter.get('/cartData', async (req, res) => {
	const userId = req.body.userId;
  
	try {
	  const cart = await CartModel.findOne({ userId });
  
	  if (!cart) {
		return res.status(404).json({ error: 'Cart not found' });
	  }
  
	  res.status(200).json(cart);
	} catch (error) {
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

  cartRouter.put('/update/:productId', async (req, res) => {
	const {  productId } = req.params;
	const userId = req.body.userId
	const { quantity } = req.body;
  
	try {
	  const cart = await CartModel.findOne({ userId });
  
	  if (!cart) {
		return res.status(404).json({ error: 'Cart not found' });
	  }
  
	  const cartItem = cart.items.find(item => item.productId.equals(productId));
  
	  if (!cartItem) {
		return res.status(404).json({ error: 'Item not found in the cart' });
	  }
  
	  cartItem.quantity = quantity;
	  await cart.save();
	  res.status(201).json(cart);
	} catch (error) {
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

  cartRouter.delete("/delete/:productId",async(req,res)=>{
	const userId= req.body.userId;
	const productId= req.params.productId;
	try{
		const cart = await CartModel.findOne({userId})
		if (!cart) {
			return res.status(404).json({ error: 'Cart not found' });
		  }
		  cart.items = cart.items.filter(item => !item.productId.equals(productId));
		  await cart.save();
		  res.status(200).json(cart);
		}catch(err){
		res.status(500).json({ error: 'Internal server error' });
	}
  })


module.exports={cartRouter}