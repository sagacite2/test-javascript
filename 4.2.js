var util = require('util');
var _ = require('lodash');
var arr = [1, 2, [1, [3]]];
util.log(_.flattenDeep(arr));

//请问要使上面代码执行成功，需要先做什么？
//如果我还想声明到package.json的'dependencies'配置中 ，还需要做什么？

