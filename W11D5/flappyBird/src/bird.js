export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 3;
        this.y = this.dimensions.height / 2;
    };

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30);
    };

    animate(ctx) {
        this.move();
        this.drawBird(ctx)
    };

    move() {
        this.y += this.velocity
        this.velocity += 0.2
    }
    flap() {
        this.velocity = -4
    };
}