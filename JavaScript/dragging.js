// 对象字面量赋值
var EventUtil = {
  /**
   * 兼容的给事件添加方法
   * @parmas element 添加方法的对象
   * @params type 添加的方法类型
   * @params handler 触发该方法时执行的函数
   */
  addHandler: function(element, type, handler) {
    // DOM2级添加事件方法
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      // IE添加事件的方法
      element.attachEvent('on' + type, handler)
    } else {
      // DOM0级添加事件的方法
      element.on['on' + type] = handler
    }
  },
  getEvent: function(event) {
    // 获取事件
    return event ? event : window.event
  },
  getTarget: function(event) {
    // 获取目标
    return event.target || event.srcElement
  }
}

EventUtil.addHandler(document, 'mousemove', function(event) {
  var myDiv = docuemnt.getElementById('myDiv')
  myDiv.style.left = event.clientX + 'px'
  myDiv.style.top = event.clientY + 'px'
})

var DragDrop = function() {
  var dragging = null
  function handleEvent(event) {
    // 获取事件和目标
    event = EventUtil.getEvent(event)
    var target = EventUtil.getTarget(event)

    // 确定事件类型
    switch (event.type) {
      case 'mousedown':
        if (target.className.indexOf('draggalbe') > -1) {
          dragging = target
        }
        break;
      case "mousemove":
      if (dragging !== null){
        // 指定位置
        dragging.style.left = event.clientX + "px";
        dragging.style.top = event.clientY + "px";
      }
      break;
      case "mouseup":
      dragging = null;
      break;
    }
  };
  return{
    enable: function(){
      EventUtil.addHandler(document, "mousedown", handleEvent);
      EventUtil.addHandler(document, "mousemove", handleEvent);
      EventUtil.addHandler(document, "mouseup", handleEvent);
    },
    disable: function(){
      EventUtil.addHandler(document, "mousedown", handleEvent);
      EventUtil.addHandler(document, "mousemove", handleEvent);
      EventUtil.addHandler(document, "mousemove", handleEvent);
    }
  }
}
