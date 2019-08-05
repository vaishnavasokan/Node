var express=require('express');

const app=express();

app.listen(8000,function(req,res){

    console.log("server started listening...");
})

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/src/views/home.html");
})

app.get("/emp",function(req,res)
{
    res.sendFile(__dirname+"/src/views/emp.html");
})

app.get("/emp/pemp",function(req,res)
{
     res.sendFile(__dirname+"/src/views/pemp.html");
 })

 app.get('/emp/pemp/:pid',function(req,res)
{
    res.send("Selected employee is : "+req.params.pid);
})

// app.get("/prd", function(req,res){

//     res.send("Product details");
// })

app.get("/product",function(req,res)
{
    res.sendFile(__dirname+"/src/views/product.html");
})


app.get("/product/wholesale",function(req,res)
{
    res.sendFile(__dirname+"/src/views/wholesale.html");
})

app.get('/product/wholesale/:wid',function(req,res)
{
    res.send("Selected product is : "+req.params.wid);
})


app.get("/",function(req,res){

    res.send("Welcome to xyz Company");
})

app.get("/books",function(req,res)
{
    res.send("Book details");
})

app.get('/books/:bid',function(req,res)
{
    res.send("Book id : "+req.params.bid);
})



// app.get('/ab?cd', function(req,res){

//     res.send('ab?cd');
// })

// app.get('/ab*cd', function(req,res){

//     res.send('ab*cd');
// })

// app.get('/ab+cd', function(req,res){

//     res.send('ab+cd');
// })


// app.get('/ab(cd)?e', function(req,res){

//     res.send('ab(cd)?e');
// })

// app.get(/a/, function(req,res){

//     res.send('/a/');
// })
// app.get(/.*fly$/, function(req,res){

//     res.send('/.*fly$/');
// })

app.get(/.*fly*/, function(req,res){

    res.send('/.*fly*/');
})



