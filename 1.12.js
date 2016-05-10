var a = null;
console.log(String(a));//输出什么？
console.log(a.toString());//这语句报错了，为什么？

//一般来说，我们期望a不是null时执行输出：
a && console.log(a.toString());//这样写可以防止程序因为异常而跳出，它是怎么做到的？