const express = require("express");

const app = express();

app.get("/", function(request,response){
    response.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at bansalmani07@gmail.com");
})

app.get("/about", function(req,res){
    res.send("Hello! My Name is Manik Bansal <br> I am a Computer Science and Engineering student at Punjab Engineering College, Chandigarh.");
})

app.get("/hobbies", function(req,res){
    res.send("My hobbies are - .......");
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
});