const jwt = require('jsonwebtoken')
require('dotenv').config()
const authentication = async(req,res,next)=>{
	const token =req.headers['authorization'];
	
try{
	if (!token) {
		return res.status(401).json({ error: 'Unauthorized - Token is missing' });
	  }
	const decoded = jwt.verify(token, process.env.secretKey)
	 if(decoded){
		req.body.userId= decoded.userID
		next()
	 }

}catch(err){
	console.log(err.message)
}
}

module.exports={authentication}