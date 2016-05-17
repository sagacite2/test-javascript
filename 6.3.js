//阅读理解题
//以下是should.js源码中的一段

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }//这个条件语句在干什么？

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
    //上面这两行代码在干嘛？
  } else if (actual instanceof expected) {
    return true;
    //上面这两行代码在干嘛？
  } else if (expected.call({}, actual) === true) {
    return true;
    //上面这两行代码在干嘛？
  }

  return false;
}


//先不管这个函数在should.js中是干嘛的，请解释一下这几行代码具体在做什么？