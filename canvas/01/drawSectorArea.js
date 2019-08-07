// 画扇形区域
function drawSectorArea(x, y, radius, sAngle, eAngle, direct, color) {
    var canvas = document.getElementById("demo");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, sAngle, eAngle, direct);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}