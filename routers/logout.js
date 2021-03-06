const express=require('express')
const router=express.Router();
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
router.get('/',(req,res)=>{
    localStorage.removeItem("mytoken");
    res.redirect("/");
})
module.exports=router;