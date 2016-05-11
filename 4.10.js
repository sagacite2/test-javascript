//使用supertest可以用来测试web服务器端
var express = require('express');
var request = require('supertest');

var app = express();

app.get('/', function (req, res) {
    res.send('我是首页');
});
app.get('/user', function (req, res) {
    res.json({ name: '王大锤' });
});

app.use(function (req, res, next) {
    res.status(404).send('页面未找到！');
});

//以下是一段测试代码
var test = request(app);
test.get('/')
    .expect('我是首页')//这句测试能通过吗？为什么？
    .expect('Content-Type', /text/)//这句测试能通过吗？为什么？
    .end(function (err, res) {
        if (err) throw err;
    });
test.get('/user')
    .expect('Content-Type', /json/) //这句测试能通过吗？为什么？
    .expect(200) //这句测试能通过吗？为什么？
    .expect({ name: '赵本山' })//这句测试能通过吗？为什么？
    .end(function (err, res) {
        if (err) throw err;
    });
test.get('/other')
    .expect(200)//这句测试能通过吗？为什么？
    .end(function (err, res) {
        if (err) throw err;
    });