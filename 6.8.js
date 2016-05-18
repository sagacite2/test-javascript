//快速学习
//以下代码是以前没见过的东西，但是通过阅读代码和考察输出结果，你能解释一下代码的意思吗？
var [a, b] = [1, 2];
console.log(typeof a, typeof b, a, b);//number number 1 2
[a, b] = [b, a];
console.log(a, b);//2,1

//有时候我们写一个函数，希望它能返回多个数值
function xx(x, y) {
    return x + 1;
    //return y + 2;//不可以这么干
}
//那就return一个数组来解决之
function yy(x, y) {
    return [x + 1, y + 2];
}
//以下代码有何便利之处？
var [x, y] = yy(2, 3);
console.log(x, y);//3,5