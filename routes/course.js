const express = require('express')
const router = express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get('/',(req,res)=>{
    let courseStr=''
    courses.map(ele => courseStr+=ele.name + ',')
    console.log(`Courses: ${courseStr}`)
    res.send(`<h2>Courses: ${courseStr}</h2>`)

})


router.get('/:id',(req,res)=>{
const courseId = req.params.id
const course = courses.find(ele  => ele.id == courseId)

if(!course){
    res.send('<h2>Course not found</h2>')
}
else{
    res.send(`<h2>Course: ${course.name}, Description: ${course.description}</h2>`)
}

})


module.exports = router