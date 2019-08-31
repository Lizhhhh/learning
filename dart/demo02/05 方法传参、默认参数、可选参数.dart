void main() {
  // // 1、定义一个方法 求1到这个数的所有数的和
  // int getSum(j) {
  //   int sum = 0;
  //   for (var i = 0; i <= j; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // }
  // print(getSum(100));

  // // 2、 定义一个方法然后打印用户信息
  // String printUserInfo(String username, int age) {
  //   return "姓名:$username --- 年龄: $age";
  // }

  // // 3、 可选参数
  // String printUserInfo(String username, [int age]) {
  //   if (age != null) {
  //     return "姓名:$username --- 年龄: $age";
  //   }
  //   return "姓名:$username --- 年龄: 保密";
  // }

  // // 4、 参数默认值
  // String printUserInfo(String username, [int age, String sex = '男']) {
  //   if (age != null) {
  //     return "姓名:$username --- 性别:$sex --- 年龄: $age";
  //   }
  //   return "姓名:$username --- 性别:$sex --- 年龄: 保密";
  // }

  // // 5、 命名参数
  // String printUserInfo(String username, {int age, String sex = "男"}) {
  //   if (age != null) {
  //     return "姓名:$username --- 性别:$sex --- 年龄: $age";
  //   }
  //   return "姓名:$username --- 性别:$sex --- 年龄: 保密!";
  // }
  // print(printUserInfo("张三", age: 25));

  // 6、实现一个把方法当作参数的方法
  // void fn1() {
  //   print('fn1');
  // }

  // void fn2(fn) {
  //   fn();
  // }

  // fn2(fn1);
}
