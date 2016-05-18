//代码规范
//请找出下面代码中至少10处写法上有问题的地方

async.auto({
    gettopic_id: function (callback) {
        var topicArr = [];
        var topicId;
        topic.find({}, {}, { }, function (err, docs) {
            docs.forEach(function (docs) {
                topicId = docs.topic_id;
                topicArr.push(topicId)
            })
            callback(null, topicArr)
        });

    },
    getresult: ['gettopic_id', function (callback, result) {
        console.log(result.gettopic_id);
        async.eachSeries(result.gettopic_id, function (topicArr, cb) {                   
            getFollowers(topicArr,cb)
        })
    }]
}, function (err, result) {
    console.log(err)
    console.log('终于完了')
});

