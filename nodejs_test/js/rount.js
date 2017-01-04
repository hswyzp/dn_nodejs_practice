
//路由配制表
var rountConfig = {
    "/" : "default",
    "/eat" : "eat",
    "/drink" : "drink",
    "/play" : "play",
    "/happy" : "happy"
};

exports.rount = function(hanlders,pathName,query){
    if(typeof hanlders[rountConfig[pathName]]  === "function"){
        if(query){
            return hanlders[rountConfig[pathName]](query);
        }else{
            return hanlders[rountConfig[pathName]]();
        }
    }else{
        return "404 I Can't find the Page!";
    }
};
