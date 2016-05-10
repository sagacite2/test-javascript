var a = 1;
(function(){
    var a = 2;
    (function(){
        console.log(a);//输出什么？
    })();
})();
console.log(a);//输出什么？