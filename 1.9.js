//Number.isInteger函数是ES6标准中的函数，用于检查Number是否整数，例如
console.log(Number.isInteger(100));//输出true
console.log(Number.isInteger(100.0));//输出true，因为
console.log(100 === 100.0);//为true
//注意 NaN 和正负 Infinity 不是整数
console.log(Number.isInteger(NaN));//false
console.log(Number.isInteger(Number.NEGATIVE_INFINITY));//false
console.log(Number.isInteger(Number.POSITIVE_INFINITY));//false
//现在用JavaScript实现这个函数：
Number.isInteger = function(value) {
    return typeof value === "number" && 
           isFinite(value) && 
           Math.floor(value) === value;
};
//请解释一下这个函数是怎么实现整数判断的？