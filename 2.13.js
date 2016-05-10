//此题2分

var s3 = '  <channel>\
    <title>蓝色理想</title>\
  </channel>\
  <item>\
    <title>界面设计测试规范</title>\
  </item>\
  <item>\
      <title>《古典写实美女》漫画教程</title>\
  </item>\
  <item>\
      <title>安远――消失的光年</title>\
  </item>\
  <item>\
      <title>asp.net 2.0多语言网站解决方案</title>\
  </item>';
  //请使用正则，把上面html代码里的所有title节点内的文本匹配出来，并放入一个数组中。注意：只要<title>和</title>之间的内容，不能掺杂其他字符。