const express=require('express')
const router=express.Router()
var User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get("/",function(req,res){
	res.render("login");
})
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
router.post("/",function(req,res){
  User.find({email: req.body.email}).exec().then(user=>{
    if(user.length>=1){
      console.log(user[0]);
      return res.status(409).json({message: "Mail already Exist"});
    }
    else{
      const saltrounds=10
      const salt = bcrypt.genSaltSync(saltrounds);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const person=new User({
                              email: req.body.email,
                              password: hash
                            })
      var mail=req.body.email;
            person.save().then(result=>{
                    const token= jwt.sign({email: mail},process.env.key,{expiresIn: '1h'})
                    localStorage.setItem('mytoken',token);
                    console.log("User Created");
                    res.redirect('/home')
                  });
                }
  })
    
	          })
   
router.post("/check",function(req,res){
   User.find({email: req.body.email}).exec().then(user=>{
   	if(user.length<1){
      return res.status(409).json({message: "Mail Not Exist"});
   	}
   	else{
   		bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
   			
   			if(result){
   				const token= jwt.sign({email: user[0].email},process.env.key,{expiresIn: '1h'})
          localStorage.setItem('mytoken',token);
          console.log("User verifiedd")
          res.redirect('/home')
   			}
        else{
          console.log("Auth Fails");
          res.redirect('/');
        
        }
   		})
   	}
   })
})	 
module.exports=router;