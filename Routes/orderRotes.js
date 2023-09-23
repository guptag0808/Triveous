// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Route to place an order
router.post('/orders/place', async (req, res) => {
  const userId = req.body.userId; // Assuming you have user authentication
  try {
    // Get the user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    // Calculate the total price from the items in the cart
    const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Create a new order based on the cart contents
    const order = new Order({
      userId,
      items: cart.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
      total,
    });

    // Save the order to the database
    await order.save();

    // Clear the user's cart
    cart.items = [];
    await cart.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
