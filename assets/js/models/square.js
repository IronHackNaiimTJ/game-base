class Square {
  constructor(ctx, x, y, w = 50, h = 50, color = "red") {
    this.ctx = ctx;

    this.y0 = y;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.vy = 0;
    this.vx = 0;
    this.ay = SQUARE_AY;

    this.color = color;
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case KEY_UP:
        this.jump();
        break;
      case KEY_DOWN:
        break;
      case KEY_LEFT:
        this.vx = -SQUARE_SPEED;
        break;
      case KEY_RIGHT:
        this.vx = SQUARE_SPEED;
        break;

      default:
        break;
    }
  }

  onKeyUp(event) {
    switch (event.keyCode) {
      case KEY_LEFT:
      case KEY_RIGHT:
        this.vx = 0;
        break;
      default:
        break;
    }
  }

  jump() {
    // la y es invertida para que suba
    if (this.y === this.y0) {
      this.vy = -SQUARE_JUMP;
    }
  }

  move() {
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;

    if (this.x + this.w > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
    } else if (this.x < 0) {
      this.x = 0;
    }

    if (this.y > this.y0) {
      this.y = this.y0;
      this.vy = 0;
    }
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
