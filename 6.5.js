//业务逻辑
//业务逻辑题
//从业务描述中抽象出类
//例如，主人家养了一只猫，猫会叫，这个描述就能抽象出主人家、猫两个实体类，但是主人家不一定是必须的，关键是猫，设计如下：

var Cat = function (name, belong) {
    //猫的名字
    this.name = name;
    //属于哪个主人家
    this.belong = belong;
}
//猫会叫
Cat.prototype.mew = function () {
    return 'miao wwwwwww';//伪代码，也可以这么写：console.log('miao wwwww');
}
//以下便是创建实例了
var cat = new Cat('懒猫', '小明家');
cat.mew();

//现在有这么一段描述：游戏里有“英雄”，英雄有名字、所属阵营，每个英雄都有2个技能，一个伤害技能，一个控制技能。
//请根据描述抽象出类的代码（伪代码即可）。




