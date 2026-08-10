const express= require('express')
const app = express()

app.use('/welcome',(req,res,next)=>{
   req.user = 'Guest'
   console.log(req.user ? 'props set' : 'props not set')
    next()
})

app.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}! </h1>`)
})

app.listen(7777,()=>{
    console.log('server is running on port 7777')
})