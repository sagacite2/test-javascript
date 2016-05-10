//此题2分

var a = 1;
var test = function(){
    console.log(a);//这里会输出undefined，为什么？
    var a = 3;
    console.log(a);
    
}
test();

