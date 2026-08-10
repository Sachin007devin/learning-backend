const express = require('express')
const router = express.Router()

router.get('/' , (req,res)=>{
    res.send('<h2>Here is the list of all users </h2>')
})

router.post('/' , (req,res)=>{
    res.send('<h2>A new user has been added</h2>')
})

module.exports = router
