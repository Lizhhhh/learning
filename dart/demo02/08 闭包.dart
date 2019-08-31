void main() {
  // 1、全局变量的特点: 全局变量会常驻内存、从而污染全局
  // 2、局部变量的特点: 会被垃圾回收机制回收、不污染全局

  // 闭包
  myClosure() {
    var a = 0;
    return () {
      a++;
      print(a);
    };
  }

  var b = myClosure();
  b();
  b();
  b();

}
