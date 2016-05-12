//此题2分
//使用爬虫爬豆瓣时，如果请求太频繁，豆瓣会识别你为机器人，给你一个错误结果。
//对这样的反爬虫机制，可以增加请求间隔时间来解决，例如每执行一个请求，等待5秒后再执行下一个。
//现有这么一个链接列表，请编程实现之。
var urls = [
    'https://movie.douban.com/subject/26322928/',
    'https://movie.douban.com/subject/26585014/',
    'https://movie.douban.com/subject/26591654/',
    'https://movie.douban.com/subject/25827963/'
];

