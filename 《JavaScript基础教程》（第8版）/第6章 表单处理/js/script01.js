window.onload = init;

function init() {
    document.getElementById("newLocation").selectedIndex = 0;
    document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage() {
    var newLoc = document.getElementById("newLocation");
    var newPage = newLoc.options[newLoc.selectedIndex].value;

    if (newPage != "") {
        window.location = newPage;
    }
}

/**
 * selectedIndex 为option的第几个下拉框(从0开始)
 * window.location 定位到某个位置
 * options[i].value 获取第i个options的值
 * onchange 检测是否发生改变
*/