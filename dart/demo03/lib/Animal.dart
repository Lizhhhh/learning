// 在 Dart中可以使用 _ 把一个属性或者方法定义成私有...

class Animal {
  String _name;
  int age;

  Animal(this._name, this.age);

  void prinInfo() {
    print('${this._name} --- ${this.age}');
  }

  String getName() {
    return this._name;
  }
}
