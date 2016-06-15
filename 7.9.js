//补充题
//在JavaScript中不允许函数重载，例如

function a(x, y, z) {
    return x + y + z;
}
function a(x, y) {
    return x + y;
}
console.log(a(1, 2, 3));//输出3，为什么？
console.log(a(1, 2));
//怎么才能使得a(1,2,3)输出6，而a(1,2)输出3？
//请修改上面代码做到这一点。

