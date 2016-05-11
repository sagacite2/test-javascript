//下面有4个模拟的异步函数，要求执行次序为a-b-c-d，控制台输出为
// a ended
// b ended
// c ended
// d ended
//(每隔500毫秒输出一行）
//请使用“邪恶金字塔”方式实现这个执行流程。

var a = function (callback) {
    setTimeout(function () {
        callback('a ended');
    }, 500);
}
var b = function (callback) {
    setTimeout(function () {
        callback('b ended');
    }, 500);
}
var c = function (callback) {
    setTimeout(function () {
        callback('c ended');
    }, 500);
}
var d = function (callback) {
    setTimeout(function () {
        callback('d ended');
    }, 500);
}
