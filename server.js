const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");
const morgan=require("morgan")
const app=express();
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())
app.use(express.static('public'))
app.set('view engine','ejs');

const aboutroute=require('./routers/about')
app.use('/about',aboutroute);
const composeroute=require('./routers/compose')
app.use('/compose',composeroute);
const contactroute=require('./routers/contact')
app.use('/contact',contactroute);
const homeroute=require('./routers/home')
app.use('/home',homeroute);
const postsroute=require('./routers/posts')
app.use('/posts',postsroute);
const loginroute=require('./routers/login')
app.use('/',loginroute);
const logoutroute=require('./routers/logout')
app.use('/logout',logoutroute);

   app.listen(3000,function(){
	console.log("Server running on port 3000");
});