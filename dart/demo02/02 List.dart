void main() {
  // print(myList.length);
  // print(myList.isEmpty);
  // print(myList.isNotEmpty);
  // print(myList.reversed);

  // var newMyList = myList.reversed.toList();
  // print(newMyList);

  // myList.addAll(['桃子', '葡挞']);
  // print(myList);

  // print(myList.indexOf('苹果'));

  // myList.remove('西瓜');
  // print(myList);

  // myList.removeAt(0);
  // print(myList);

  // String str = '';
  // print(str = myList.join(','));

  // print(str.split(''));

  // var person = {
  //   "name":"张三",
  //   "age":20
  // };

  // var m =new Map();
  // m["name"]="李四";
  // print(person);
  // print(m);

  // 常用属性:
  Map person = {"name": "张三", "age": 20};

  // ps: toList(),将打印出来的结果转换成数组
  // print(person.keys.toList()); // name, age

  // print(person.values.toList()); // 张三, 20

  // print(person.isNotEmpty); // true

  // print(person.isEmpty); // false

  // // 给Map中添加属性 ->  addAll
  // person.addAll({
  //   "word": ['敲代码', '送外卖'],
  //   "height": 185
  // });
  // print(person);

  // // 删除Map中的数据
  // person.remove("age");
  // print(person);

  // // 根据值查找Map中的数据
  // print(person.containsValue("张三"));


}
