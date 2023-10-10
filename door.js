
const fs = require("fs");

const validator = require( "email-validator");


var users = []; // Array to store signed-up names


var passwordRegex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,16}$/

let validpassword = (password) => {
    return passwordRegex.test(password);
};

fs.readFile("users.json", "utf8", (err, data) => {
    if(!err){
        try{
            let parsedData = JSON.parse(data);
            if(Array.isArray(parsedData)){
                users = parsedData;
            }
        } catch (error){
            console.error("error in parsing existing users:", error);
        }
    }
});

function bringUsertoFile(){
    fs.writeFile("users.json", JSON.stringify(users), "Utf8", (err)=> {
        if(err){
            console.error("There is error in bringing users to file:", err)
        }
    });
}

function isEmailUnique(email){
    return !users.some((user) => user.email === email)// check if the email has not exist before(or email is unique)
};


function Signup(req, res) {

let body = "";

req.on("data", (chunk) => {

body += chunk.toString();
});

req.on("end", () => {
var data = JSON.parse(body);

if (!data.name || !data.email || !data.password) {

res.writeHead(400, { "Content-Type": "application/json" });
res.end(JSON.stringify({ error: "Name,Email & Password are required" }));

return;

}

if(!validpassword(data.password)){
    res.writeHead(400,{"Content-Type":"application/json"});
    res.end(JSON.stringify({error:"Valid Password is required"}));

    return;
}

if(!validator.validate(data.email)){
    res.writeHead(400,{"Content-Type": "applicationh/json"});
    res.end(JSON.stringify({error: "Email is invalid"}));

    return;
}

if(!isEmailUnique(data.email)){
    res.writeHead(400, {"Content-Type":"application/json"});
    res.end(JSON.stringify({error:"Email already exist"}));

    return;
}

var newUser = {name : data.name,
    email: data.email,
    password: data.password,
};

 users.push(newUser);
 bringUsertoFile();

 res.writeHead(201, { "Content-Type": "application/json" });

res.end(JSON.stringify({ message: "Sign up successful" }));

});

}

function Login(req, res) {

let body = "";
  
req.on("data", (chunk) => {
  
body += chunk.toString();
  
});
  
req.on("end", () => {
let  data = JSON.parse(body);
  
if (!data.email || !data.password) {
  
res.writeHead(400, { "Content-Type": "application/json" });
  
res.end(JSON.stringify({ error: "Email & Password are required" }));
  
return;
  
}

var userfound = users.find(user => user === data.email && data.password);
  
if (userfound) {
  
res.writeHead(200, { "Content-Type": "application/json" });
  
res.end(JSON.stringify({ message: "Login successful" }));
  
} else {
  
 res.writeHead(401, { "Content-Type": "application/json" });
  
res.end(JSON.stringify({ error: "Login failed" }));
}
  
});
}
module.exports = { Signup, Login };
  