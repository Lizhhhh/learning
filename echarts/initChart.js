/**
 * 初始化图
 * @param dom 为div的id
 */
function initChart(dom) {
  var myChart = echarts.init(document.getElementById(dom));
  option = {
    dataZoom: [{ type: 'inside' }, { type: 'slider' }],
    xAxis: [
      {
        type: 'category',
        data: [
          '桩号1',
          '桩号2',
          '桩号3',
          '桩号4',
          '桩号5',
          '桩号6',
          '桩号7',
          '桩号8',
          '桩号9'
        ]
      }
    ],
    yAxis: {
      show: false,
      type: 'value',
      max: 2,
      min: 0
    },
    visualMap: [
      {
        show: false,
        type: 'piecewise',
        pieces: [
          { gte: 1.00001, label: '优', color: 'green' },
          { gte: 1.000001, lt: 1.00001, lebel: '良', color: '#97FFFF' },
          { lt: 1.0000001, lebel: '中', color: '#EEEE00' }
          // {gte:60,lt:70,lebel:'次',color:'#F4A460'},
          // {lt:60,lebel:'差',color:'#FF6347'},
        ]
      }
    ],
    series: [
      {
        type: 'bar',
        barCategoryGap: '1%',
        label: {
          normal: {
            show: true,
            fontSize: 15
          }
        },
        data: [
          { value: 1.000001, label: { normal: { formatter: '长江大桥' } } },
          { value: 1.00001, label: { normal: { formatter: '高速公路' } } },
          { value: 1.000002, label: { normal: { formatter: '鹦鹉洲大桥' } } }
        ]
      }
    ]
  }
  myChart.setOption(option);
  return myChart;
}