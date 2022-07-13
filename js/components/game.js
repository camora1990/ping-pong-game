/**
 * Funcion encargada de dibujar el tablero barras y bola del juego en 2d
 * @param {*any} ctx - contexto del juego, plano dimension
 * @param {any} element - elementos a dibujar en el contaxto
 * @author Camilo Morales Sanchez
 */
function draw(ctx, element) {
  switch (element.kind) {
    case "rectangle":
      ctx.fillRect(element.x, element.y, element.width, element.height);
      break;
    case "circle":
      ctx.beginPath();
      ctx.arc(element.x, element.y, element.radius, 0, 7);
      ctx.fill();
      ctx.closePath();
      break;
  }
}

/**
 *
 * clase encargada de iniciar dibujar el juego
 * @class
 */

export class GamePingPong {
  /**
   *
   * @param {HTMLElement} canvas - Nodo padre donde se mostrara el juego
   * @param {*} board - Tablero a mostrar en el navegador
   */
  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.ctx = canvas.getContext("2d");
    this.finish = false;
  }
  draw() {
    for (let i = this.board.elementsBoard.length - 1; i >= 0; i--) {
      const element = this.board.elementsBoard[i];
      draw(this.ctx, element);
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
  }

  verifyCollisions() {
    for (let i = this.board.bars.length - 1; i >= 0; i--) {
      const bar = this.board.bars[i];
      if (this.hit(bar, this.board.ball)) {
        this.board.ball.collisions(bar);
      }
    }
  }
  play() {
    if (this.board.playing) {
      this.clear();
      this.draw();
      this.verifyCollisions();
      this.board.ball.move();

      if (
        this.board.ball.x <
          this.board.bars[0].x + this.board.bars[0].width / 2 ||
        this.board.ball.x > this.board.bars[1].x + this.board.bars[1].width / 2
      ) {
        this.finish = true;
      }
    }
  }
  hit(a, b) {
    //Revisa si a colisiona con b
    let hit = false;
    // colisiones verticales
    if (b.x + b.width >= a.x && b.x < a.x + a.width) {
      if (b.y + b.height >= a.y && b.y < a.y + a.height) {
        hit = true;
      }
    }
    // colision de a con b
    if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
      if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
        hit = true;
      }
    }

    // colision de b con a
    if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
      if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
        hit = true;
      }
    }

    return hit;
  }
}
