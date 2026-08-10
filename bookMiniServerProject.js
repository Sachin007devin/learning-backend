const express =  require('express')
const app = express()
const bookRouter = require('./routes/books')

app.use('/books' , bookRouter)

app.listen(7777,()=>{
    console.log('server running on http://localhost:7777')
})