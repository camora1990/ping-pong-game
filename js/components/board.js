/**
 * 
 * Clase encargada de crear el tabledo del juego 
 * @class
 */

export class Board {

    /**  
     * @constructor
     * @param {number} width - ancho del tabledo canvan
     * @param {*number} height - alto del tablero canvan
     */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
    this.playing = false;
  }

  /**
   * @returns - retorna los elementos bars y ball del board
   */
  get elementsBoard() {
    const elements = this.bars.map((e) => e);
    elements.push(this.ball);
    return elements;
  }
}
