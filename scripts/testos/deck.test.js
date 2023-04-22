import Deck from '../deck.js';


describe('Deck', () => {
  test('Unit test de Deck, longitud', () => {
    const deck = new Deck();
    deck.createDeck();
    expect(deck.cards.length).toBe(40);
  });
  test('Unit test de Deck tres primeres cartes', () => {
    const deck = new Deck();
    deck.createDeck();
    expect(deck.cards[0]).toEqual({'number': 1, 'suit': 'Oros', 'valor': 1});
    expect(deck.cards[1]).toEqual({'number': 2, 'suit': 'Oros', 'valor': 2});
    expect(deck.cards[2]).toEqual({'number': 3, 'suit': 'Oros', 'valor': 3});
  });
  test('Unit test de shuffleArray, barrejar la array', () => {
    const deck =new Deck();
    deck.createDeck();
    const originalDeck = [deck.cards];
    deck.shuffleArray();
    expect(deck.cards.length).toBe(40);
    expect(deck.cards).not.toEqual(originalDeck);
  });
});
