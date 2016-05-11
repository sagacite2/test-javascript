var o1 = {
    value: 1,
    test: function () {
        console.log(this.value);
        (function () {
            console.log(this.value);
        })();
    }
}
o1.test();//输出什么？为什么？

var o2 = {
    value: 2,
    test: function () {
        var that = this;
        (function () {
            console.log(that.value);
        })();
    }
}
o2.test();//输出什么？为什么？