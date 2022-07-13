

/**
 * Clase encargada de la creacion del elemento ball para el juego del pin pon
 * @class 
 * @author Camilo Morales Sanchez
 */


export class Ball {

    /**
     * Constructor para creacion de ball
     * @param {number} x coordenada x inicial
     * @param {number} y -coordenada y inicial
     * @param {number} radius - radio ball
     * @param {Board} board - Tablero del juego
     * @author Camilo Morales Sanchez
     */
    constructor(x, y, radius, board) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speed_y = 0;
      this.speed_x = 3;
      this.board = board;
      this.direction = -1;
      this.bounce_angle = 0;
      this.max_bounce_angle = Math.PI / 12;
      this.speed = 3;
  
      board.ball = this;
      this.kind = "circle";
    }
  
    /**
     * Metodo encragado de mover la bola en eje x y y
     * @method
     * @author Camilo Morales Sanchez
     */
    move() {
      this.x += this.speed_x * this.direction;
      this.y  += this.speed_y;

    }
  
    get width() {
      return this.radius * 2;
    }
  
    get height() {
      return this.radius * 2;
    }
  
    /**
     * Metodo encargado de cambiar la direccion de la bola
     * @param {Bar} bar 
     * @author Camilo Morales Sanchez
     */
    collisions(bar) {
      // Reacciona a la colision con una barra que ricibe como parametro
      let relative_interset_y = bar.y + bar.height / 2 - this.y;
  
      let normalize_interset_y = relative_interset_y / (bar.height / 2);
  
      this.bounce_angle = normalize_interset_y * this.max_bounce_angle;
  
      this.speed_y = this.speed * -Math.sin(this.bounce_angle);
      this.speed_x = this.speed * Math.cos(this.bounce_angle);
  
      if (this.x > this.board.width / 2) this.direction = -1;
      else this.direction = 1;
  
 
    }
  
    toString() {
      return "BALL x: " + this.x + " y: " + this.y;
    }
  }