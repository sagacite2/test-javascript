//以下是使用express的最简单的一段代码，请解释一下每行代码的意义，都干了什么？

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);