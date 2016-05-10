var a = 1;
var b = { value: 99 };
var test = function (x, y) {
    x = 2;
    y.value = 100;
}
test(a, b);
console.log(a, b.value);//输出什么？
var further = function (o) {
    o = null;
}
further(b);
console.log(b === null);//输出什么？