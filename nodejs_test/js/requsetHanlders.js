var fs = require("fs");

exports.eat = function(request,response){
    response.write("eat goodfood!");
    response.end();
};
exports.drink = function(request,response){
    response.write("drink Alcohol!");
    response.end();
};
exports.play = function(request,response){
    response.write("play Gime!");
    response.end();
};
exports.happy = function(request,response){
    response.write("happy every day!");
    response.end();
};
exports.default = function(request,response){
    var html = fs.readFileSync("../template/form.html");
    response.write(html);
    response.end();
};
exports.submit = function(request,response){
    request.setEncoding("utf8")
    response.end();
}
