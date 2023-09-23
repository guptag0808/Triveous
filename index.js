const express= require('express')
const {connection}= require('./db')
const {userRouter} = require('./Routes/userRouter')
const {authentication}= require('./middleware/authentication')
const {categoryRouter} =require('./Routes/categoryRouter')
const {productRouter} = require("./Routes/productRouter")
const {cartRouter}= require('./Routes/cartRouter')
const {orderRouter}= require("./Routes/orderRoutes")
const app= express()

app.use(express.json())

app.use('/api/user',userRouter)

app.use('/api/category',categoryRouter)
app.use('/api/product',productRouter)
app.use(authentication)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.listen(3000,async()=>{
	try{
		await connection
		console.log('connected to DB')
	}catch(err){
   console.log(err.message)
	}
	console.log('server is running at 3000')
})