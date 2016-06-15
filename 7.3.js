//补充题
//快速学习
//爬虫经常有这么一个要求：每隔一天爬一次某个网站，取得其每日的更新。这就需要做定时任务。以下代码使用later库实现此功能。

var later = require('later');
later.date.localTime();

var times = 0;
//定义一个计划任务，每隔2秒执行一次test函数
var sched = later.parse.recur().every(2).second();
var t = later.setInterval(function () {
    test();
}, sched);//执行setInterval函数时，计划任务已经开始了

function test() {
    times++;
    console.log('第' + times + '次运行！');
}

//15秒后，终止计划任务，如果不写下面的代码，计划任务会无限期执行下去
setTimeout(function () {
    t.clear();
    console.log("结束！");
}, 15 * 1000);

//模仿上面代码，每隔3秒请求一次百度首页，不终止

