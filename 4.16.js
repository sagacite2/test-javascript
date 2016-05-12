//此题2分

//做列表功能时，往往涉及到分页。现在有这么一个应用场景：数据库中存储了数万篇文章，在web端需要展示这些文章的标题列表，每页展示20篇。
//怎么写这个分页查询？

var mongoose = require('mongoose');
var async = require('async');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: { type: String },
    order: { type: Number }
});
var Article = mongoose.model('Article', ArticleSchema);
mongoose.connect('mongodb://127.0.0.1/test-javascript', {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        process.exit(1);
    }
});

//添加模拟数据
var createMockDatas = function (callback) {
    Article.count({}, function (err, num) {
        if (num > 199) {
            console.log('已有数据，无需添加');
            callback(null);
        } else {
            console.log('添加模拟数据');
            var i = 0;
            var articles = [];
            while (++i <= 200) {
                var article = new Article();
                article.order = i;
                article.title = '这是标题，' + i.toString();
                articles.push(article);
            }
            async.eachSeries(articles, function (article, cb) {
                article.save(function (err) {
                    console.log('添加模拟数据到数据库：' + article.title);
                    cb(err);
                });
            }, function (err) {
                console.log('添加模拟数据，end');
                callback(err);
            });
        }
    })

}

//page参数表示第几页,callback要求返回对应分页的20个article对象
var getPageArticle = function (page, callback) {
    //在这里写分页查询代码





}

async.auto({
    step1: createMockDatas,
    step2: ['step1', function (callback) {
        console.log('测试分页');
        getPageArticle(5, function (articles) {
            articles.forEach(function (article) {
                console.log(article.title);
            })
        });
    }]
});


