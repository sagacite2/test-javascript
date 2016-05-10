var s1 = 'abc';
var s2 = s1;
var o1 = { value: 'abc' };
var o2 = o1;
s2 = '123';
o2.value = '123';
console.log(s1, o1.value);//输出什么？
