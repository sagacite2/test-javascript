//此题2分
var o1 = {
    test: function () {
        console.log(this === o1);
    }
}
o1.test();//输出什么？
var func = o1.test;
func();//输出什么？为什么？