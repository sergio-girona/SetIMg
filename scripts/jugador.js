import Deck from './deck.js';
// crear baralla
const deck = new Deck();
deck.createDeck();
deck.shuffleArray();
/**
 * Classe Jugador
 */
export default class Jugador {
  /**
   *Constructor Jugador
   * @param {String} name
   * @param {int} punts
   */
  constructor(name, punts) {
    this.name = name;
    this.punts=punts;
    this.baraja = [];
    this.barajaGeneral = deck;
  }

  /**
   * Funció per afegir carta a un array
   * @param {Card} card
   */
  afegirCartaArray(card) {
    this.baraja.push(card);
  }
}
