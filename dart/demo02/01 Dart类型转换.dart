void main() {
  // String str = '123.1';
  // var myNum = double.parse(str);
  // print(myNum is double);

  // var a = 10;
  // var b = a++;
  // print(a);
  // print(b);

  // // 输出 0~50 的整数
  // for (int i = 0; i < 51; i++) {
  //   if (i % 2 == 0) {
  //     print(i);
  //   }
  // }

  // // 输出 1~100的和
  // int sum = 0;
  // for (int i = 0; i < 101; i++) {
  //   sum += i;
  // }
  // print(sum);

  // // 循环遍历数组
  // List l1 = ['张三', '李四', '王五'];
  // for (int i = 0; i < l1.length; i++) {
  //   print(l1[i]);
  // }

  List list = [
    {
      "cate": '国内',
      "news": [
        {"title": "国内新闻1"},
        {"title": "国内新闻2"},
        {"title": "国内新闻3"},
      ]
    },
    {
      "cate": '国际',
      "news": [
        {"title": "国际新闻1"},
        {"title": "国际新闻2"},
        {"title": "国际新闻3"},
      ]
    },
  ];

  for (var i = 0; i < list.length; i++) {
    print(list[i]['cate']);
    for (var j = 0; j < list[i]["news"].length; j++) {
      print(list[i]["news"][j]["title"]);
    }
    print('-------------');
  }
}
