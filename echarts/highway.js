window.onload = function init() {
  var chart = initChart('highway') // 初始化图
  var option = chart.getOption();
  option.title ={
    text:'高速公路',
    align:'center'
  }
  chart.setOption(option);
}

