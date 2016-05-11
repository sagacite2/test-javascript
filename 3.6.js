var F = function () {

}

var a = new F();
console.log(a.__proto__ === F.prototype);
var b = new F();
console.log(a === b);
console.log(a.__proto__ === b.__proto__);
F.prototype.value = 1;
a.value = 2;
a.__proto__.value = 3;
console.log(a.value, b.value);

var FF = function () {

}
FF.prototype = a;
var c = new FF();
console.log(c.value);

//上面都分别输出什么？