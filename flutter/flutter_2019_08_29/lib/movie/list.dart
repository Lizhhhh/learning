// import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:meta/meta.dart';
import 'package:dio/dio.dart';

Dio dio = new Dio();

class MovieList extends StatefulWidget {
  MovieList({Key key, @required this.mt}) : super(key: key);

  // 电影类型
  final String mt;

  @override
  _MovieListSate createState() {
    return new _MovieListSate();
  }
}

// 有状态控件必须结合一个状态管理类,来进行实现
class _MovieListSate extends State<MovieList> {
  // 默认显示第一页数据
  int page = 1;
  // 每页显示的数据条数
  int pageSize = 10;
  // 电影列表数据
  var mlist = [];
  // 总数据条数,实现分页效果
  var total = 0;

  // 控件被创建的时候会执行 initState
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    // getMovieList();
  }

  @override
  Widget build(BuildContext context) {
    // return Text("这是电影列表页面 ---- " + widget.mt);
    return Text("这是电影列表页面 --- " + widget.mt);
  }

  getMovieList() async {
    // 偏移量的计算公式(page - 1) * pageSize
    int offset = (page - 1) * pageSize;
    var response = await dio.get(
        'http://www.liulongbin.top:3005/api/v2/movie/${widget.mt}?start=$offset&count=$pageSize');

    var result = response.data;
    print(result);
  }
}
