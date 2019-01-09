// 包含一个用于调用函数的 onload 事件处理程序，在这里名为 newWinLinks 。这个函数遍历页面中的所
// 有链接，查看是否包含 newWin 类。如果包含 newWin 类，那么单击对应的链接就会调用 newWindow 函数
// 并生成相应的百度图标到<a></a> 位置
window.onload = newWinLinks;

function newWinLinks() {
    for (i = 0; i < document.links.length; i++) {
        if (document.links[i].className == "newWin") {
            document.links[i].onclick = newWindow;
        }
    }
}

function newWindow() {
    var baiduWindow = window.open("../images/baidu.jpg", "catWin", "resizable=no,width=350,height=260");
    return false;
}