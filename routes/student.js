const express = require('express')
const router = express.Router()

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get('/',(req,res)=>{

    let studentsListStr=''

    students.map(ele => studentsListStr+=ele.name + ',')
    console.log(`Students:${studentsListStr}`)

    res.send(`<h2>Students:${studentsListStr} </h2>`)

})

router.get('/:id',(req,res)=>{
    const studentId = req.params.id
    const student = students.find(ele => ele.id == studentId)

    if(!student){
        res.send('<h2>Student not found</h2>')
    }
    else{
        res.send(`<h2>Student: ${student.name}</h2>`)
    }

})

module.exports = router