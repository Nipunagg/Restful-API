const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
 const Post=mongoose.model('Post')
 const checkAuth=require('../middleware/checkauth.js')
router.get("/:title",checkAuth,function(req,res){
	   const title=req.params.title;
	Post.findOne({title: title},function(err,post){
			res.render("post",{PostTitle: post.title,PostContent: post.Content})
		
	})
})

module.exports=router;