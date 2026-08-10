const express = require('express')
const app =  express()

app.get('/orders' , (req,res)=>{
    res.send('<h2>Here is the list of all orders</h2>')
})

app.get('/users' , (req,res)=>{
    res.send('<h2>Here is the list of all users </h2>')
})

app.post('/orders' , (req,res)=>{
    res.send('<h2>A new order has been created</h2>')
})

app.post('/users' , (req,res)=>{
    res.send('<h2>A new user has been added</h2>')
})

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})