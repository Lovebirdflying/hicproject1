const http = require("http");
const url = require("url");

const { Signup, Login} = require("./door");
const system = http.createServer((request, response)=>{
const postURL = url.parse(request.url, true)
if(request.method === "POST" && postURL.pathname === "/signup"){
    Signup(request, response);
} else if(request.method ==="POST" && postURL.pathname ==="/login"){
    Login(request, response);
}else{
    response.writeHead(404,{"Content-Type":"text/plain"})
response.end("Not Found")
}
});

const port = 1000

system.listen(port, () => {
    console.log(`Server is Running ${port}`)
});