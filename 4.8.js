//不使用mocha测试框架，直接用should.js，也是可以测试代码的，先编写一个函数如下：
var should = require('should');

function test(name, fn) {
    try {
        fn();//执行fn函数，catch其错误并输出到控制台
    } catch (err) {
        console.log('    \x1b[31m%s', name);
        console.log('    %s\x1b[0m', err.stack);
        return;
    }
    //如无错误，则记为测试通过
    console.log('  √ \x1b[32m%s\x1b[0m', name);
}

//然后就可以搞测试了
test('1 == \'1\'', function () {
    should.equal(1, '1');
});
test('1 !== \'1\'', function () {
    should.notStrictEqual(1, '1');
});

//现在有这么一个对象
var o1 = {
    name: 'wang',
    method: function (a, b) {
        return a * b;
    }
}
var o2 = Object.create(o1);
//示范代码：期望o1是对象
test('o1是对象', function () {
    o1.should.be.a.Object();
})

//我们期望o1的name属性为字符串，method属性为函数，且使用参数3和4传入method，要求返回12
//我们还期望o2的原型是o1
//请根据我们的期望，编写测试代码

