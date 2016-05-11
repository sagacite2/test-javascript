//获取数列中的最大者，我们可以使用Math.max()函数：
console.log(Math.max(4, 5, 9, 2));//9
//问题是，这些数往往是存在一个数组和中的，例如
var arr = [4, 5, 9, 2];
//这时候直接Math.max(arr)当然是不行的
console.log(Math.max(arr));//输出NaN
//这么做就可以了：
console.log(Math.max.apply(null,arr));//9

//把一个数组添加到另一个数组的末尾，我们可以
var arr1 = [1,2];
var arr2 = [3,4];
var arr3 = arr1.concat(arr2);
console.log(arr3);//[ 1, 2, 3, 4 ]
//请使用数组的push函数来简洁地实现之。