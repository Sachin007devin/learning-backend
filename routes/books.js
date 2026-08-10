const express =  require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log('Here is the list of books!')
    res.send('<h2>Here is the list of books!</h2>')
})

router.post('/',(req,res)=>{
    console.log('Book has been added!')
    res.send('<h2>Book has been added!</h2>')
})

module.exports = router