const jwt=require('jsonwebtoken');
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
module.exports=(req,res,next)=>{

       const token=localStorage.getItem('mytoken');
        jwt.verify(token,process.env.key,(err,user)=>{
        	if(err){

        		res.redirect("/");
        	}
        	next();
        })
    }


 