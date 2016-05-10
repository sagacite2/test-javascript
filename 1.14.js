console.log(false && 111);
console.log(true && 111);
console.log(null && undefined);
console.log(undefined && null);

console.log('' || 111);
console.log({} || 111);
console.log(null || undefined);
console.log(undefined || null);
//都输出什么？

var num = 0;
num = num || 3;
console.log(num);//输出什么？