//此题2分

//在下面模拟的异步函数中，第一个函数告诉你a的值，第二个函数告诉你b的值，第三个函数告诉你a+b的值。
//它们都要500毫秒后才返回数据，如果一个一个执行，则需要1500毫秒。
//当然，完全可以在1000毫秒左右完成计算，请分别使用eventproxy和async解决之（写两个程序，一个用eventproxy，一个用async）。

var func1 = function (callback) {
    setTimeout(function () {
        callback(null, 3564663);
    }, 500);
}
var func2 = function (callback) {
    setTimeout(function () {
        callback(null, 45645754);
    }, 500);
}
var func3 = function (a, b, callback) {
    setTimeout(function () {
        callback(null, a + b);
    }, 500);
}