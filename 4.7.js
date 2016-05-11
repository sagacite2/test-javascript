//assert模块用于简单的单元测试十分便利，例如
var assert = require('assert');

assert.doesNotThrow(
    function () {
        1 / 0;//在JavaScript里这么干不会抛异常
    });

assert.throws(
    function () {
        null.aa();//这条语句本来是会报错的，但是在这里执行却不会报错，因为assert.throws就是期望抛出异常
    });


//下面请解释一下，以下语句是干什么的？会报错么？
assert.notStrictEqual(NaN, NaN);
assert.strictEqual(typeof null, 'object');
