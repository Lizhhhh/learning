// 绘制网格线,用于辅助定位
function dreaTableNoborder(width, height, gap, canvas) {
    var ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    // canvas.style.border = "1px solid #000";

    var gap = 10;
    ctx.lineWidth = 0.5;

    for (var i = 1; i < canvas.height / gap; i++) {
        ctx.moveTo(0, i * gap);
        ctx.lineTo(canvas.width, i * gap);
    }
    for (var i = 1; i < canvas.width / gap; i++) {
        ctx.moveTo(i * gap, 0);
        ctx.lineTo(i * gap, canvas.height);
    }
    ctx.strokeStyle = "red";
    ctx.stroke();
}