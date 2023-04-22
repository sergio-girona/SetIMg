import Jugador from '../jugador.js';

describe('Jugador', () => {
  test('Unit test de Jugador constructor', () => {
    const jugador = new Jugador('Manolo', 0);
    expect(jugador.name).toBe('Manolo');
    expect(jugador.punts).toBe(0);
    expect(jugador.baraja.length).toBe(0);
    expect(jugador.barajaGeneral.cards.length).toBe(40);
  });
  test('Unit test de afegir Cartes a Array de jugador', () => {
    const jugador = new Jugador('Manolo', 0);
    const card = jugador.barajaGeneral.cards[0];
    jugador.afegirCartaArray(card);
    expect(jugador.baraja.length).toBe(1);
  });
});
