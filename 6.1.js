//阅读理解题
//以下是eventproxy源码中的一段

EventProxy.prototype.once = function (ev, callback) {//ev为事件名，callback为事件的监听器，也就是是一旦有ev事件触发，就要执行callback函数
    var self = this;
    var wrapper = function () {
        callback.apply(self, arguments);//执行callback
        self.unbind(ev, wrapper);//解绑事件
    };
    this.bind(ev, wrapper);//绑定事件
    return this;
};

//once和on不同，它只执行一次callback，此后即使事件ev再次emmit出来，callback也不再执行。请解释一下这段代码是怎么实现让事件监听只触发一次的？