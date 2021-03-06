
const mongoose=require('mongoose')
const uri='mongodb+srv://nipunagg:aggarwal@cluster0.rc8j3.mongodb.net/UserDB?retryWrites=true&w=majority'
const uri2='mongodb://localhost:27017/userDB'
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});
const Userschema={
	email: String,
	password: String
}

module.exports=mongoose.model("User",Userschema);