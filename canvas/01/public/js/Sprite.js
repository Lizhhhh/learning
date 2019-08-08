function Sprite(option) {
    this._init(option);
}
Sprite.prototype = {
    _init: function(option) {
        this.x = option.x === 0 ? 0 : option.x || 10;
        this.y = option.y === 0 ? 0 : option.y || 10;

        this.w = option.w || 40; // 绘制在canvas上面的宽
        this.h = option.h || 65;

        this.originW = option.originW || 40; // 截取的宽
        this.originH = option.originH || 65;

        this.fps = option.fps || 10;

        this._dirIndex = 0;

        this._imgSrc = option.imgSr || '';
    },
    render: function(ctx) {
        var img = new Image();
        img.src = this._imgSrc;

        var self = this;

        img.onload = function() {
            var frameIndex = 0;
            setInterval(() => {
                ctx.drawImage(
                    img

                )
            }, sel.fps);
        }
    }
}