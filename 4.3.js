var superagent = require('superagent');

//从以下代码，说明程序的执行流程
var getBaidu = function () {
    console.log('get baidu begin');
    superagent.get('https://www.baidu.com/')
        .end(function (err, res) {
            console.log('get baidu end');
        });
}
var getSina = function () {
    console.log('get sina begin');
    superagent.get('http://www.sina.com.cn/')
        .end(function (err, res) {
            console.log('get sina end');
        });
}
getBaidu();
getSina();
