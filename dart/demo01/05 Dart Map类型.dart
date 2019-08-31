void main() {
  var person = {
    "name": "张三",
    "age": 20,
    "word": ["程序猿", "送外卖"]
  };
  print(person);
  print(person["name"]);

  // 使用Maps
  var p = new Map();
  p["name"] = "李四";
  p["age"] = 22;
  p["word"] = ["程序员", "外卖"];
  print(p);
}
