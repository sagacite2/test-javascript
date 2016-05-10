//以下题目随机选取一题。
//1
//数组的filter函数可以实现对数组的每一项运行给定函数，返回该函数会返回true的项组成的数组。例子：
var arr = [8, 3, 4, 6, 7, 56, 1, 9, 89, 9, 55, 4, 34, 43, 6, 34, 77];
//在arr中拾取所有偶数，并组成另一个数组
var arr2 = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(arr2);//[ 8, 4, 6, 56, 4, 34, 6, 34 ]
//请使用数组的forEach函数来实现上面的效果。


//2
//检查数组里的元素是否全是偶数
var arr = [4, 6, 8, 10, 16, 78];
var test = function (array) {
    return array.every(function (item) {
        return item % 2 === 0;
    })
}
console.log(test(arr));
//请使用数组的forEach函数来实现上面的效果。

//3
//把数组中所有元素乘以100，形成一个新数组
var arr = [4, 6, 8, 10, 16, 78];
var arr2 = arr.map(function (item) {
    return item * 100;
})
console.log(arr2);//[ 400, 600, 800, 1000, 1600, 7800 ]
//请使用数组的forEach函数来实现上面的效果。

//4
//检查数组中是否含有5的倍数？
var arr = [4, 6, 8, 10, 16, 78, 100];
var test = function (array) {
    return array.some(function (item) {
        return item % 5 === 0;
    })
}
console.log(test(arr));
//请使用数组的forEach函数来实现上面的效果。

