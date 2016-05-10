var a = 1;
(function () {
    var b = 2;
    (function () {
        var c = 3;
        console.log(typeof a, typeof b, typeof c);//输出什么？
    })();
    console.log(typeof a, typeof b, typeof c);//输出什么？
})();
console.log(typeof a, typeof b, typeof c);//输出什么？