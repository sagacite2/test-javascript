var s2 = '111.222';
console.log(s2.match(/\d/)[0]);
console.log(s2.match(/\d*/)[0]);
console.log(s2.match(/\d+/)[0]);
console.log(s2.match(/\d*?/)[0]);
console.log(s2.match(/\d+?/)[0]);
console.log(s2.match(/\d?/)[0]);
console.log(s2.match(/\d{2}/)[0]);
console.log(/\d{4,}/.test(s2));
console.log(s2.match(/\d+/g));
//以上都输出什么？

console.log(/[^]+/.exec('\r\nabc中文字符$%^'));
console.log(/[\w\W]+/.exec('\r\nabc中文字符$%^'));
//请解释一下为什么这两个正则能匹配任意字符？


  
  