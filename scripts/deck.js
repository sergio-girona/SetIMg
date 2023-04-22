import Card from './card.js';

/**
 * Classe Deck
 */
export default class Deck {
  /**
   * Constructor Deck
   */
  constructor() {
    this.cards = [];
  }

  /**
   * Funció per crear baralla
   */
  createDeck() {
    for (const suit of Card.suits) {
      for (const number of Card.numbers) {
        this.cards.push(new Card(number, suit));
      }
    }
  }

  /**
   * Funció per barrejar la baralla
   */
  shuffleArray() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}
