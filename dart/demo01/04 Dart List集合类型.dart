void main() {
  var l2 = new List();
  l2.add('张三');
  l2.add('李四');
  l2.add('王五');
  print(l2);

  // 定义List时指定类型
  var l3 = new List<String>();
  l3.add('abc');
  // l3.add(111);  // The argument type 'int' can't be assigned to the parameter type 'String'.
}
