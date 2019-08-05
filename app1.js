var express=require('express');

const app=express();

app.listen(8080,function(req,res){

    console.log("server started listening...");
})

app.get("/",function(req,res){

    res.send("Welcome to node server");
})