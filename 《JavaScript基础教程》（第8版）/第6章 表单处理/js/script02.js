// 根据选择的月份显示对应的天数
window.onload = initDay;

function initDay() {
    document.getElementById("months").selectedIndex = 0;
    document.getElementById("months").onchange = setDay;
}

function setDay() {
    var day = document.getElementById("days");
    var myDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var _i = document.getElementById("months").selectedIndex;
    for (var i = 0; i < myDay[_i]; i++) {
        day.options[i] = new Option(i + 1);
    }
}

/**
 *  options[i] = new Option(name,value) 给options动态的添加item
 *
*/