class Enemy {
  constructor(ctx, x, y) {
    this.ctx = ctx;

    this.y0 = y;
    this.h0 = 0

    this.x = this.ctx.canvas.width;
    this.y = this.ctx.canvas.height - 160;
    this.w = 50;
    this.h = 70;

    this.vx = KOOPA_SPEED;
    this.vy = 0;
    this.ay = KOOPA_AY;

    this.sprite = new Image();
    this.sprite.src = "/assets/img/koopa-sprite.png";
    // seleccion de cada frame
    this.sprite.verticalFrames = 1;
    this.sprite.verticalFrameIndex = 0;
    this.sprite.horizFrames = 2;
    this.sprite.horizFrameIndex = 0;

    this.sprite.onload = () => {
      this.sprite.isReady = true;
      this.sprite.frameWidth = Math.floor(
        this.sprite.width / this.sprite.horizFrames
      );
      this.sprite.frameHeight = Math.floor(
        this.sprite.height / this.sprite.verticalFrames
      );
    };

    this.animationTick = 0;
  }

  

  draw() {
    if (this.sprite.isReady) {
      this.ctx.drawImage(
        this.sprite,
        this.sprite.horizFrameIndex * this.sprite.frameWidth,
        this.sprite.verticalFrameIndex * this.sprite.frameHeight,
        this.sprite.frameWidth,
        this.sprite.frameHeight,
        this.x,
        this.y,
        this.w,
        this.h
      );
      this.animate();
    }
  }

  move() {
    this.x += this.vx;
  }

  animate() {
    this.animationTick += 1;

    if (this.animationTick > KOOPA_RUN_ANIMATION) { // dice las veces que debe ir cambiando el frame de KOOPA en este caso cambia cada 10 veces(10frames)
      this.animationTick = 0;
      this.sprite.horizFrameIndex += 1;

      if (this.sprite.horizFrameIndex > this.sprite.horizFrames - 1) {
        this.sprite.horizFrameIndex = 0;
      }
    }
  }
}
