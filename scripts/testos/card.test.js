import Card from '../card.js';

describe('Card', () => {
  test('Unit test del constructor', () => {
    const card = new Card(5, 'Oros');
    expect(card.valor).toBe(5);

    const card2 = new Card(10, 'Oros');
    expect(card2.valor).toBe(.5);
  });
});
