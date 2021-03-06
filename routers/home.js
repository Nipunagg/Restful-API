const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
 const Post=mongoose.model('Post')

router.get("/",function(req,res){
	Post.find({},function(err,posts){
      res.render("home",{posts:posts})
	})
})

module.exports=router;