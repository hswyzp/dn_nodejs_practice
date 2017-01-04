function result(oldStr,newStr){
    return newStr ? newStr : oldStr;
}

exports.eat = function(str){
    return "eat " + result("goodfood",str) + "!";
};
exports.drink = function(str){
    return "drink " + result("Alcohol",str) + "!";
};
exports.play = function(str){
    return "play " + result("Gime",str) + "!";
};
exports.happy = function(str){
    return "happy " + result("every day",str) + "!";
};
exports.default = function(str){
    return "hello nodejs word!";
}
