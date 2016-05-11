//此题2分

var A = function () {

}

var B = function () {

}

var C = function () {

}
console.log(A.prototype.constructor === A, A.prototype.constructor === B, A.prototype.constructor === C);
console.log(B.prototype.constructor === A, B.prototype.constructor === B, B.prototype.constructor === C);
console.log(C.prototype.constructor === A, C.prototype.constructor === B, C.prototype.constructor === C);

B.prototype = Object.create(A.prototype);
C.prototype = Object.create(B.prototype);

var a = new A();
var b = new B();
var c = new C();
console.log(A.prototype === B.prototype, B.prototype === C.prototype, A.prototype === C.prototype);
console.log(a instanceof A, a instanceof B, a instanceof C);
console.log(b instanceof A, b instanceof B, b instanceof C);
console.log(c instanceof A, c instanceof B, c instanceof C);
console.log(A.prototype.constructor === A, A.prototype.constructor === B, A.prototype.constructor === C);
console.log(B.prototype.constructor === A, B.prototype.constructor === B, B.prototype.constructor === C);
console.log(C.prototype.constructor === A, C.prototype.constructor === B, C.prototype.constructor === C);

//上面都分别输出什么？为什么？
A.prototype.test = function () {
    console.log('a');
}
a.test = function () {
    console.log('a1');
}
C.prototype.test = function () {
    console.log('c');
}
a.test();//输出什么？
b.test();//输出什么？
c.test();//输出什么？
