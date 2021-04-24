const Server=require("http");


Server.createServer((req,res)=>{
 

    res.write("Gabriel");    
    res.write("Jose");
    res.write("Gab");

    res.end();

    


}).listen(8080);








