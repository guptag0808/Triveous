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