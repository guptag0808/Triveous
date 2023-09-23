
Certainly! You can create a single table for your README.md file with all the endpoints and details in one place. Here's the complete table:

markdown
Copy code
# E-Commerce-triveous API Documentation

This document provides information about the endpoints available in the E-Commerce-triveous API.

## User Routes

| Method | Endpoint           | Description                    | Request Body                            | Response                |
| ------ | ------------------ | ------------------------------ | --------------------------------------- | ----------------------- |
| POST   | /user/register     | Register a new user            | See Request Body Example below          | Status: 201 Created     |
|        |                    |                                |                                       | Body: { "message": "User is Registered" } |
| POST   | /user/login        | Login with existing user credentials | See Request Body Example below     | Status: 201 Created     |
|        |                    |                                |                                       | Body: { "token": "your_jwt_token", "message": "Login Successfull" } |

**Request Body Example for User Routes**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Category Routes
Method	Endpoint	Description	Request Body	Response
POST	/category/create	Create a new category	See Request Body Example below	Status: 201 Created
Body: { "message": "Category added successfully" }
GET	/category/getall	Get all categories		Status: 200 OK
Body: Array of Categories
Request Body Example for Category Routes:

json
Copy code
{
  "name": "mobile"
}
Product Routes
Method	Endpoint	Description	Request Body	Response
POST	/product/create	Create a new product	See Request Body Example below	Status: 201 Created
Body: { "message": "Product added successfully" }
GET	/:categoryId	Get all products by category ID		Status: 200 OK
Body: Array of Products
GET	/product/productsId/:productsId	Get a specific product by ID		Status: 200 OK
Body: Product Details
Request Body Example for Product Routes:

json
Copy code
{
  "title": "oppo",
  "description": "camera phone",
  "price": 9500,
  "availability": true,
  "categoryId": "category_id"
}
Cart Routes
Method	Endpoint	Description	Request Body	Response
GET	/cart/getAll/:userID	Get all data from user's cart		Status: 200 OK
Body: Cart Details
POST	/cart/add	Add a product to the cart	See Request Body Example below	Status: 200 OK
Body: { "message": "Product added to cart successfully" }
PATCH	/cart/:productId	Update the quantity of a product in the cart	See Request Body Example below	Status: 200 OK
Body: { "message": "Cart item is updated now" }
DELETE	/cart/delete/:productId	Delete an item from the cart		Status: 200 OK
Body: { "message": "Cart item is deleted now" }
Request Body Example for Cart Routes:

json
Copy code
{
  "userId": "user_id",
  "productId": "product_id",
  "quantity": 2,
  "price": 9500
}
Order Routes
Method	Endpoint	Description	Request Body	Response
POST	/:productId	Place an order for a specific product		Status: 201 Created
Body: { "message": "order is placed now" }
GET	/order/order-history	Get the order history for the authenticated user		Status: 200 OK
Body: Array of Order Details
GET	/:orderId	Get detailed information of a specific order by its ID		Status: 200 OK
Body: Order Details