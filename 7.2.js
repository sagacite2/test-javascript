//快速学习
//以下代码利用了retry库的重试功能，实现发现错误就重试。
var retry = require('retry');

function test(cb) {
    //这里模拟抛出错误
    cb(new Error('一个错误'));
}
function retryTest(cb) {
    var operation = retry.operation({
        retries: 5,//最多重试5次
        factor: 3,//指数因子
        minTimeout: 2 * 1000,//重试的时间间隔(minTimeout毫秒到maxTimeout之间)
        maxTimeout: 4 * 1000,
        randomize: true,
    });
    operation.attempt(function (current) {
        console.log('第' + current + '次test！');
        test(function (err) {
            if (operation.retry(err)) {
                return;
            }
            //cb(err ? operation.mainError() : null);//用回调函数把错误传出去，这里先省略不管
        })
    })
}
retryTest();

//请模仿上面的代码，使用superagent不断重试获取www.google.com（因为谷歌被墙，所以肯定不断出错，不断重试）

