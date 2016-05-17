//阅读理解题
//以下是lodash源码中的一段

function arrayEvery(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

//请解释一下这段代码干了什么？目的是什么？