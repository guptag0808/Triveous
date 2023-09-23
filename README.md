## Register a New User

**Method**: POST
**Endpoint**: user/register
**Description**: Register a new user.

### Request

- **Request Body Example**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }

Response
Status: 201 Created
Body:
{
  "message": "User is Registered"
}

## Login with Existing User Credentials

**Method**: POST
**Endpoint**: user/login
**Description**: Login with existing user credentials.

### Request

- **Request Body Example**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
Response
Status: 201 Created
Body:
{
  "token": "your_jwt_token",
  "message": "Login Successful"
}

## Create a New Category

**Method**: POST
**Endpoint**: /category/create
**Description**: Create a new product category.

### Request

- **Request Body Example**:
  ```json
  {
    "name": "mobile"
  }
Response
Status: 201 Created
Body:

{
  "message": "Category added successfully"
}

## Get All Categories

**Method**: GET
**Endpoint**: /category/getall
**Description**: Get a list of all product categories.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**: Array of Categories
  ```json
  [
    {
      "_id": "category_id",
      "name": "mobile"
    },
    {
      "_id": "category_id",
      "name": "laptop"
    },
   
  ]
 ## Create a New Product

**Method**: POST
**Endpoint**: /product/create
**Description**: Create a new product.

### Request

- **Request Body Example**:
  ```json
  {
    "title": "oppo",
    "description": "camera phone",
    "price": 9500,
    "availability": true,
    "categoryId": "category_id"
  }
Response
Status: 201 Created
Body:

{
  "message": "Product added successfully"
}
## Get Products by Category

**Method**: GET
**Endpoint**: /:categoryId
**Description**: Get all products under a specific category.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**: Array of Products
  ```json
  [
    {
      "_id": "product_id",
      "title": "oppo",
      "description": "camera phone",
      "price": 9500,
      "availability": true,
      "categoryId": "category_id"
    },
    {
      "_id": "product_id",
      "title": "redmi",
      "description": "durable phone",
      "price": 10500,
      "availability": false,
      "categoryId": "category_id"
    },
    
  ]
## Get Product by ID

**Method**: GET
**Endpoint**: /product/productsId/:productId
**Description**: Get a specific product by its ID.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**:
  ```json
  {
    "_id": "product_id",
    "title": "oppo",
    "description": "camera phone",
    "price": 9500,
    "availability": true,
    "categoryId": "category_id"
  }
## Get Cart by User ID

**Method**: GET
**Endpoint**: /cart/getAll/:userId
**Description**: Get all data from the user's cart.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**:
  ```json
  {
    "_id": "cart_id",
    "userId": "user_id",
    "items": [
      {
        "_id": "item_id",
        "productId": "product_id",
        "quantity": 2,
        "price": 9500
      },
     
    ]
  }
## Add Product to Cart

**Method**: POST
**Endpoint**: /cart/add
**Description**: Add a product to the cart.

### Request

- **Request Body**:
  ```json
  {
    "userId": "user_id",
    "productId": "product_id",
    "quantity": 2,
    "price": 9500
  }
## Update Cart Item Quantity

**Method**: PATCH
**Endpoint**: /cart/:productId
**Description**: Update the quantity of a product in the cart.

### Request

- **Request Body**:
  ```json
  {
    "quantity": 3
  }
## Delete Cart Item

**Method**: DELETE
**Endpoint**: /cart/delete/:productId
**Description**: Delete an item from the cart.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**:
  ```json
  {
    "message": "Cart item is deleted now"
  }
## Place an Order

**Method**: POST
**Endpoint**: /:productId
**Description**: Place an order for a specific product.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 201 Created
- **Body**:
  ```json
  {
    "message": "Order is placed now"
  }
## Get Order History

**Method**: GET
**Endpoint**: /order/order-history
**Description**: Get the order history for the authenticated user.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**:
  ```json
  [
    {
      "_id": "order_id",
      "userId": "user_id",
      "items": [
        {
          "_id": "item_id",
          "productId": "product_id",
          "quantity": 2
        },
       
      ],
      "totalPrice": 19000,
      "date": "2023-07-26T10:15:00.000Z"
    },
    
  ]
## Get Order Details by ID

**Method**: GET
**Endpoint**: /:orderId
**Description**: Get detailed information of a specific order by its ID.

### Request

No request body is required for this endpoint.

### Response

- **Status**: 200 OK
- **Body**:
  ```json
  {
    "_id": "order_id",
    "userId": "user_id",
    "items": [
      {
        "_id": "item_id",
        "productId": "product_id",
        "quantity": 2
      },
     
    ],
    "totalPrice": 19000,
    "date": "2023-07-26T10:15:00.000Z"
  }
