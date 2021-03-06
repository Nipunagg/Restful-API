
const express=require('express')
const checkAuth=require('../middleware/checkauth.js')
const router=express.Router();

  router.get("/",checkAuth,function(req,res){
	res.render("contact");})

module.exports=router;
