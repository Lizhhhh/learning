function drawLabel(text, x, y, ctx) {
    ctx.fillStyle = "purple";
    ctx.font = "50 '微软雅黑'";
    ctx.textBaseLine = "bottom";
    ctx.fillText(text, x, y);
}