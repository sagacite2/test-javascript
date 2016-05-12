//以下代码是nodeclub中定义的API所需的一个中间件。请简单说明这个中间件的作用和原理。

var auth = function (req, res, next) {
  var ep = new eventproxy();
  ep.fail(next);

  var accessToken = req.body.accesstoken || req.query.accesstoken;
  accessToken = validator.trim(accessToken);

  UserModel.findOne({accessToken: accessToken}, ep.done(function (user) {
    if (!user) {
      res.status(403);
      return res.send({error_msg: 'wrong accessToken'});
    }
    if (user.is_block) {
      return res.send({error_msg: 'your account is blocked'});
    }
    req.user = user;
    next();
  }));

};