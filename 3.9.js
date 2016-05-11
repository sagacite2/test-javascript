(function () {
    console.log([].join.call(arguments, ' | '));
}).apply(this, [1, 2, 3]);
//请解释一下上面代码干了什么？怎么做到的？