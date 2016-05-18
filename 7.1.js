//补充题
//此题2分
//任何循环都可以写成递归，任何递归都可以写成循环
//实际上，任何递归也可以写成信号传递和监听的模式
//请解释一下下面代码干了什么？

var eventproxy = require('eventproxy');
var test = function (callback) {
    var ep = new eventproxy();
    var i = 10;
    var sum = 0;
    ep.on('signal', function () {
        sum += i;
        i--;
        if (i > 0) {
            ep.emit('signal');
        } else {
            callback(sum);
        }
    });
    ep.emit('signal');
}

//请使用循环和递归实现上面代码所做的事（两份代码）

