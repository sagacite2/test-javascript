////此题2分
//以下题目随机选取1题测试

//1 判断一个字符串中出现次数最多的字符，统计这个次数
//输入'我的书包我的书包书我的书书包我的书我的我书包的'
//输出'书 7次'


//2 输入一个字符串或数组，输出反过来的字符串或数组
//以下方法使用递归实现。请使用循环来实现之
function recursiveReverse(seq) {
    return seq.length > 1 ? recursiveReverse(seq.slice(1)).concat(seq.slice(0, 1)) : seq;
}
console.log(recursiveReverse('4536'));//输出'6354'
console.log(recursiveReverse([4,5,6,7]));//[ 7, 6, 5, 4 ]
//请注意输入的可以是字符串也可以是数组

