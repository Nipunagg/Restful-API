const express=require('express')
const router=express.Router();
const multer=require('multer');
var Post=require('../models/post')
const checkAuth=require('../middleware/checkauth.js')
const storage=multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'./public/Upload');
	},
	filename : function(req,file,cb){
		cb(null, file.originalname)
	}
})
const upload=multer({storage: storage})
router.get("/",checkAuth,function(req,res){
	res.render("compose");})

router.post("/",checkAuth,upload.single('pic'),function(req,res){
	console.log(req.body);
	const obj=new Post({
		title:req.body.title,
		Content: req.body.PostContent,
		picname: req.file.filename
	});
	   obj.save();

	 res.redirect('/home');

})
module.exports=router;