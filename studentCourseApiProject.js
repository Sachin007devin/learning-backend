const express = require('express')
const app = express()

const homeRouter = require('./routes/home')
const studentRouter = require('./routes/student')
const courseRouter = require('./routes/course')

app.use('/',homeRouter)
app.use('/students',studentRouter)
app.use('/courses',courseRouter)

app.use('/*path',(req,res)=>{
    res.status(404).send('<h2>Page not found</h2>')
})

app.listen(7777,()=>{
     console.log('Server is running on http://localhost:7777')
})