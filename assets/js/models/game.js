class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d"); // contexto importante ponemos que es de 2 dimensiones

    this.drawIntervalId = undefined;
    this.fps = 60;

    this.backgound = new Background(this.ctx);
    // this.square = new Square(this.ctx, 10, 10);
    this.mario = new Mario(this.ctx, 10, this.canvas.height - 161)
    this.enemy = new Enemy(this.ctx, 10, this.canvas.height - 161)

    // this.audio = new Audio('/assets/audio')
  }

  onKeyDown(event) {
    // this.square.onKeyDown(event);
    this.mario.onKeyDown(event);
  }

  onKeyUp(event) {
    // this.square.onKeyUp(event);
    this.mario.onKeyUp(event);
  }

  start() {
    if (!this.drawIntervalId) {
      // this.audio.play()
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, 1000 / this.fps);
    }
  }

  stop() {
    clearInterval(this.drawIntervalId);
    // this.audio.pause()
    this.drawIntervalId = undefined;
  }


  checkCollisions() {
    const m = this.mario
    const e = this.enemy
    const colx = m.x + mw >= e.x && m.x < e.x + e.w
    const coly = m.y + m.h >= e.y && m.y < ey + eh

    if(colx && coly) {
      this.gameOver()
    }
  }


  gameOver(){
    // this.gameOverAudio.play()
    this.stop()
    alert('GAME OVER')
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  move() {
    // this.square.move();
    this.backgound.move();
    this.mario.move();
    this.enemy.move();
  }

  draw() {
    this.backgound.draw();
    // this.square.draw();
    this.mario.draw();
    this.enemy.draw();
  }
}
