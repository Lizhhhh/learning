void printInfo() {
  print("我是一个自定义方法");
}

int getNum() {
  var ret = 123;
  return ret;
}

String printUserInft() {
  return 'str';
}

List getList(){
  return ['11','22','33'];
}

void main() {
  // print('调用系统内置的方法');
  printInfo();

  var n = getNum();

  var s = printUserInft();

  print(getList());
}
