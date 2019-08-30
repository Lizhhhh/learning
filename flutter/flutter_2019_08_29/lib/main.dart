// 导入 相关控件
import 'package:flutter/material.dart';
import './movie/list.dart';

// 入口函数
void main() => runApp(new MyApp());

// 无状态控件  有状态控件

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // 每个项目最外层,
    return new MaterialApp(
      title: '飞凌视讯1.0',
      theme: new ThemeData(
        primarySwatch: Colors.purple,
      ),
      home: MyHome(),
    );
  }
}

class MyHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        child: Scaffold(
            // 导航条区域
            appBar: AppBar(
              title: Text('飞凌视讯1.0'),
              centerTitle: true,
              actions: <Widget>[
                new IconButton(
                  icon: new Icon(Icons.search),
                  onPressed: () {},
                )
              ],
            ),
            // 侧边栏区域
            drawer: Drawer(
                child: ListView(
              padding: EdgeInsets.all(0.0),
              children: <Widget>[
                new UserAccountsDrawerHeader(
                  accountEmail: Text('feiling@hust.com'),
                  accountName: Text('青松'),
                  currentAccountPicture: CircleAvatar(
                      backgroundImage: AssetImage("/images/1.png")),
                  decoration: new BoxDecoration(
                      // 背景图片
                      image: new DecorationImage(
                          fit: BoxFit.cover,
                          image: NetworkImage(
                              'http://www.liulongbin.top:3005/images/bg1.jpg'))),
                ),
                new ListTile(
                  title: Text('用户反馈'),
                  trailing: new Icon(Icons.feedback),
                ),
                new ListTile(
                  title: Text('系统设置'),
                  trailing: new Icon(Icons.settings),
                ),
                new ListTile(
                  title: Text('我要发布'),
                  trailing: new Icon(Icons.send),
                ),
                // 分割线控件
                Divider(),
                new ListTile(
                  title: Text('注销'),
                  trailing: new Icon(Icons.exit_to_app),
                )
              ],
            )),
            // 页面的主体
            body: TabBarView(
              children: <Widget>[
                MovieList(mt: 'in_theaters'),
                MovieList(mt: 'coming_soon'),
                MovieList(mt: 'top10')
              ],
            ),
            // 底部的区域
            bottomNavigationBar: Container(
              // 美化当前的 Container 盒子
              decoration: new BoxDecoration(color: Colors.black),
              // 一般在手机上底部高度都为50
              height: 50.0,
              child: new TabBar(
                labelStyle: TextStyle(height: 0.0, fontSize: 10.0),
                tabs: <Widget>[
                  new Tab(
                    icon: new Icon(Icons.movie_filter),
                    text: '正在热映',
                  ),
                  new Tab(
                    icon: new Icon(Icons.movie_creation),
                    text: '即将上映',
                  ),
                  new Tab(
                    icon: new Icon(Icons.local_movies),
                    text: 'TOP10',
                  ),
                ],
              ),
            )));
  }
}
