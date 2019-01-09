window.onload = init
var pic = new Array("../images/douyu.jpg", "../images/huya.jpg", "../images/panda.jpg")

function init() {
    for (var i = 0; i < parent.document.links.length; i++) {
        parent.document.links[i].onclick = setFrameContent;
    }
}

function setFrameContent() {
    var Num = Math.floor(Math.random() * pic.length);
    document.getElementById("adBanner").src = pic[Num];
}