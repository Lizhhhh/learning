class Person {
  String name;
  int age;

  // // 默认构造函数
  // Person(String name, int age) {
  //   this.name = name;
  //   this.age = age;
  // }

  // 默认构造函数的简写
  Person(this.name, this.age);

  Person.now() {
    print('我是匿名构造函数 now');
  }


  void printInfo() {
    print("${this.name} --- ${this.age}");
  }
}

void main() {
  // Person p1 = new Person("张三", 23);

  // 初始化调用命名构造函数
  Person p1 = new Person.now();

}
