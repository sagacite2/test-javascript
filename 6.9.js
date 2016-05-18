//快速学习

//下面这个函数是干嘛的？怎么使用它？
function add(x) {
    return function (y) {
        return x + y;
    }
}

//下面代码的写法虽然不同，其实所做的事跟上面的函数是一样的：
const add = x => y => x + y;
//请问 => 这个符号是什么意思？

