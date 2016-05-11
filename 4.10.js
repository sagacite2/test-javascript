//使用supertest可以用来测试web服务器端
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/user', function (req, res) {
    res.json({ name: 'wang1' });
});

app.use(function (req, res, next) {
    res.status(404).send('页面未找到！');
});

app.listen(3000);


//以下是测试代码（要放在别的js文件里，并用mocha框架来执行测试，这里只是演示）
var request = require('supertest')(app);
