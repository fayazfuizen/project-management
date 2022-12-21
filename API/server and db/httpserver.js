
var http=require("http");
fs= require("fs");
var server=http.createServer(function(request,response)
{
console.log("request received");//by default server is in sleep state so start Listener
var filename;
if(request.url=="/fetch")
{
    filename="fetch.html";
}
else if(request.url=="/showData")
{    
    filename="showData.html";
}
else if(request.url=="/newform") 
{
 filename="newform.html" ;  
 console.log(filename);
}
fs.readFile(filename,"utf8",function(error,data){
    if(error)
    {
        response.write(500);
        response.write("unable to readfile");
    }
    else{
       response.setHeader("content-type","text/html");
        response.write(data);
//output prints on browser

    }
    response.end();
})


});
server.listen(7070,function(){
    console.log("listener started at 7070");
})//in btwn 1024 to 64335
