
//路由配制表
var rountConfig = {
    "/" : "default",
    "/eat" : "eat",
    "/drink" : "drink",
    "/play" : "play",
    "/happy" : "happy",
    "/submit" : "submit"
};

exports.rount = function(hanlders,pathName,request,response){
    if(typeof hanlders[rountConfig[pathName]]  === "function"){
        hanlders[rountConfig[pathName]](request,response);
    }else{
        response.write('<div style="width:100%;height:45px;line-height:45px;color:red;text-align:center;font-size:20px;">404 I Can\'t find the Page!</div>');
        response.end();
    }
};
