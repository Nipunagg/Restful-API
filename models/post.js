const mongoose=require("mongoose");

const url='mongodb+srv://nipunagg:aggarwal@cluster0.rc8j3.mongodb.net/BlogDB?retryWrites=true&w=majority'
const url2='mongodb://localhost:27017/blogDB'
mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true});

 const Postschema={
 	title: String,
 	Content: String,
 	picname: String
 }
 module.exports=mongoose.model("Post",Postschema)