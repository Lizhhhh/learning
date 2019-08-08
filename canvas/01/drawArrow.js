function DrawArrow(option) {
    this._init(option);
}

DrawArrow.prototype = {
    _init: function(option) {
        this.x0 = option.x0 || x0;
        this.y0 = option.y0 || y0;
        this.length = option.length || 100;
        this.gap = option.gap || 10;
        this.ctx = option.ctx;
    },
    initX: function() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.moveTo(this.x0, this.y0);
        this.ctx.lineTo(this.x0 + this.length, this.y0);
        this.ctx.lineTo(this.x0 + this.length - this.gap, this.y0 - this.gap);
        this.ctx.moveTo(this.x0 + this.length, this.y0);
        this.ctx.lineTo(this.x0 + this.length - this.gap, this.y0 + this.gap);
        this.ctx.stroke();
    },
    initY: function() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'black';
        this.ctx.moveTo(this.x0, this.y0);
        this.ctx.lineTo(this.x0, this.y0 - this.length);
        this.ctx.lineTo(this.x0 - this.gap, this.y0 + this.gap - this.length);
        this.ctx.moveTo(this.x0, this.y0 - this.length);
        this.ctx.lineTo(this.x0 + this.gap, this.y0 + this.gap - this.length);
        this.ctx.stroke();
    },
    drawLine: function(option) {
        let list = option.list || [0];
        let x1 = option.x1 || 0;
        let gap = option.gap || 50;
        this.ctx.strokeStyle = 'blue';
        this.ctx.beginPath();
        for (let i = 0; i < list.length; i++) {
            this.ctx.moveTo(this.x0 + (x1 + i) * gap, this.y0 - list[i] * this.length);
            if (i + 1 !== list.length) {
                this.ctx.lineTo(this.x0 + (x1 + i + 1) * gap, this.y0 - list[i + 1] * this.length)
            }
        }
        this.ctx.stroke();
    }
}