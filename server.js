const express = require("express")
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
const session = require('express-session')
const {v4:uuidv4} = require('uuid')
const router = require('./router')

const PORT =  process.env.PORT || 3020

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use(session(
    {
        secret:uuidv4(),
        resave:false,
        saveUninitialized:true
    }
))
app.use('/route',router)

//home 
app.get('/', (req, res) => {
    res.render('base', { title: "Login System" });
});
app.post('route/login', (req, res) => {
    res.render('base', { title: "Login System" });
});
app.listen(PORT,()=>
{
    console.log("Server is ready");
})