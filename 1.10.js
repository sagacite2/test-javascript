//取小数点后n位，可以这样：
var a = 100.1111111111;
console.log(a.toFixed(2));//100.11

//在Node中这么写也不会报错：
console.log(100.1111111111.toFixed(2));

//但是下面这么写就会出错，为什么？
console.log('100.1111111111'.toFixed(2));