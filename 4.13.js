//此题2分
//web程序一般都会做日志记录，用户的每一次请求以及服务器端的部分的响应信息都会记录在同一个log文件中。
//简单的实现办法就是直接使用
var fs = require('fs');
fs.appendFileSync('log.txt', 'log info here');
//问题是，如果这个网站在网络高峰期访问量非常巨大，日志记录操作就会极其频繁，同一个log.txt文件可能在一秒内就会重复被打开、追加文本几十次。
//请说出提高性能的一些办法。

