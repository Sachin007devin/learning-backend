const express = require('express')
const router = express.Router()

router.get('/',(req,resp)=>{
    resp.send('<h2>Welcome to the Student & Course Portal API!</h2>')
})

module.exports = router