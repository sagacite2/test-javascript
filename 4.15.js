//一篇文章可以有多个共同作者（但是一般就1个或几个），一个作者可以参与多篇文章（可能很少，也可能很多）。
//文章发表后可以被其他人评论，一篇文章可能有很多个评论。
//另外：
//作者的属性有：作者名
//文章的属性有：标题、内容、发表时间
//评论的属性有：评论者（此属性在这个题目可忽略）、评论内容
//请完成下面的表设计：

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var AuthorSchema = new Schema({

});

var ArticleSchema = new Schema({

});

var ReplySchema = new Schema({

});

mongoose.model('Author', AuthorSchema);
mongoose.model('Article', ArticleSchema);
mongoose.model('Reply', ReplySchema);