const http = require('http')
const port  =  3000

const server= http.createServer((req,resp)=>{
console.log('server created')

resp.setHeader('Content-Type','text/html')
if(req.url === '/'){
    resp.end("<h2>Welcome home</h2>")
}
else if(req.url === '/about'){
       resp.end("<h2>Welcome to About Us</h2>")
}
else if(req.url === '/node'){
    resp.end("<h2>Welcome to my Node Js project'</h2>")
}
else{
    resp.statusCode = 404
    resp.end("<h2>Page Not Found</h2>")
}
})

server.listen(port,()=>{
    console.log('server running')
})

