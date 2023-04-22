/**
 * Clase Carta
 */
export default class Card {
  static suits = ['Oros', 'Copas', 'Espadas', 'Bastos'];
  static numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

  /**
   * Constructor carta
   * @param {int} number Numero carta
   * @param {String} suit Pal de la carta
   */
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
    this.valor= number > 7? 0.5: number;
  }
}
