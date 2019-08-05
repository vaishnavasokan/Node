
/*var a=function()
{
    console.log("Hello");
}
a();*/

var greeting = require("./greeting");
greeting.sayhello();
greeting.saybye();
greeting.languages;
printArray();
function printArray()
{
    for(var i=0;i<greeting.languages.length;i++)
    {
        console.log(greeting.languages[i]);
    }
}




