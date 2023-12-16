var express = require('express')
var router  = express.Router()

const cred ={
    email:"salman@gmail.com",
    password:"123"
} 
// Login route
router.post('/login',(req,res)=>
{
    if(req.body.email==cred.email && req.body.password==cred.password)
    {
        req.session.user=req.body.email
        res.redirect('/route/dashboard')
    }else
    {
     res.send("Invalid Login")
    }
})
//dashbord
router.get('/dashboard',(req,res)=>
{
    if(req.session.user)
    {
        res.render('dashboard',{user:req.session.user})
    }else
    {
        res.send("unautherized")
    }
})
//logout
router.get('/logout',(req,res)=>
{
    req.session.destroy((err)=>
    {
        if(err)
        {
            console.log(err);
        }else
        {
            res.render('base',{title:"Express",logout:"logout successful"})
        }
        
    })
})
module.exports = router