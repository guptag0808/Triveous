const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
	name:{type:String, required:true},
	email:{type:String, require:true},
	pass:{type:String, require:true},
	mobile:{type:Number, require:true}
})

const UserModel= mongoose.model('User',userSchema)
module.exports= {UserModel}