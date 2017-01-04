var http = require("http");
var url = require("url");

exports.start = function(rount,hanlders,port){
    port = port ? port : "998";//端口号
    http.createServer(function(request,response){
        response.writeHead(200,{"Content-type":"text-plain"});
        if(url.parse(request.url)["pathname"] == "/favicon.ico"){
            response.end();
        }
        console.log("pathname=" + url.parse(request.url)["pathname"]);
        response.write(rount(hanlders,url.parse(request.url)["pathname"],url.parse(request.url)["query"]));
        response.end();
    }).listen(port,function(){
        console.log("server start for port " + port);
    });
}
