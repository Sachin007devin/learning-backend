const express = require('express')
const app = express()

app.get('/welcome/:username',(req,resp)=>{
    const {username} = req.params
    const {role} = req.query
    resp.send(`<h1>Welcome ${username}, your role is ${role}</h1>`)
})


app.listen(7777,()=>{
    console.log('Server is running on http://localhost:7777')
})