//补充题，回调函数的理解
var add = function (x, y) {
    return x + y;
}
function go(callback, x, y) {
    return callback(x, y);

}
console.log(go(add, 1, 2));

//上面代码执行go函数就会输出对数字1和2经过处理后的一个结果。至于要进行什么样的处理，需要通过回调函数来定义。
//上面定义的对1和2进行加法运算。下面请写一个对1和2进行取幂值的运算函数（Math.pow(1,2)），并传给go函数执行，打印结果。

