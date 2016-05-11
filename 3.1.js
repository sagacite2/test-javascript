var o1 = {value:1};
var o2 = {
    value:2,
    test:function(){
        console.log(this.value);
    }
}
o2.test();//输出什么？
o1.test = o2.test;
o1.test();//输出什么？