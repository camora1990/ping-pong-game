/**
 * Clase encargada de crear las barras del jugo
 * @class
 */

export class Bar {
  /**
   * Constructor para creacion de barras
   * @param {number} x coordenada x inicial
   * @param {number} y -coordenada y inicial
   * @param {number} width - ancho de las barras
   * @param {number} height - alto de las barras
   * @param {Board} board - Tablero del juego
   * @author Camilo Morales Sanchez
   */
  constructor(x, y, width, height, board) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.board = board;
    this.board.bars.push(this);
    this.kind = "rectangle";
    this.speed = 5;
  }

  /**
   * Metodo encargado de mover la barra en el eje y hacia abajo
   * @method
   * @author Camilo Morales Sanchez
   */

  down() {
    this.y += this.speed;
  }

  /**
   * Metodo encargado de mover la barra en el eje y hacia arriba
   * @method
   * @author Camilo Morales Sanchez
   */

  up() {
    this.y -= this.speed;
  }

  toString() {
    return "x: " + this.x + " y: " + this.y;
  }
}
