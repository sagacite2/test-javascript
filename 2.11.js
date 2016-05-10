//某人的出生日期是1999年10月1日0时，那么他出生到现在已经经历了多少天？

var birthday = new Date(Date.UTC(1999, 10 - 1, 1));
var timespan = Date.now() - birthday.getTime();

console.log('距离1999年10月1日0时已经过' + timespan / 1000 / 60 / 60 / 24 + '天');

//请解释一下，timespan / 1000 / 60 / 60 / 24是什么意思？


