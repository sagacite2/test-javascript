var test = function (value) {
    console.log(this.value);
    console.log(value);
}
var o1 = { value: 1 };
test.call(o1, 2);//输出什么？这里用的是call，用apply怎么写？
var o2 = { value: 3 };
var test2 = test.bind(o2);
test2(4);//输出什么？