class Person {
  String name = "张三";
  int age = 23;

  void getInfo() {
    print("${this.name} --- ${this.age}");
  }

  void setInfo(int age) {
    this.age = age;
  }
}

void main() {
  // 实例化
  var p1 = new Person();
  p1.setInfo(28);
  p1.getInfo();
}
