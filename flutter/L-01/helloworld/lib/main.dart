// import 'package:flutter/material.dart';

// void main() => runApp(new MyApp());
// // MyApp不需要做状态处理,所以此组件继承StatelessWidget即可

// class MyApp extends StatelessWidget {
//   // 这个组件是整个应用的主组件
//   @override
//   Widget build(BuildContext context) {
//     return new MaterialApp(
//       // 标题
//       title: 'Flutter Demo',
//       theme: new ThemeData(
//         // 自定义主题
//         primarySwatch: Colors.blue,
//       ),
//       home: new MyHomePage(title: 'Flutter Demo Home Page'),
//     );
//   }
// }

// // 主页需要继承自StatefulWidget
// class MyHomePage extends StatefulWidget{
//   MyHomePage({Key key, this.title}) : super(key: key);

//   // 标题
//   final String title;
//   // 必须重写createState方法
//   @override
//   _MyHomePageState createState() => new _MyHomePageState();
// }
// // 状态类必须继承State类,注意后面需要指定为<MyHomePage>
// class _MyHomePageState extends State<MyHomePage>
// {
//   int _counter = 0;
//   void _incrementCounter(){
//     //
//   }
// }
