function drawImgByUrl(url, x, y, ctx) {
    var img = new Image();
    img.src = url;

    img.onload = function() {
        ctx.drawImage(img, x, y);
    }
}
