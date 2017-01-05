var http = require("http");
var url = require("url");

exports.start = function(rount,hanlders,port){
    port = port ? port : "998";  //端口号
    http.createServer(function(request,response){
        response.writeHead(200,{"Content-type":"text/html"});
        if(url.parse(request.url)["pathname"] == "/favicon.ico"){
            response.end();
        }else{
            console.log("pathname=" + url.parse(request.url)["pathname"]);
            rount(hanlders,url.parse(request.url)["pathname"],request,response);
        }
    }).listen(port,function(){
        console.log("server start for port " + port);
    });
}
