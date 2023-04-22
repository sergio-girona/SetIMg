import Game from '../game.js';

describe('Game', ()=> {
  test('Unit test Game constructor', ()=>{
    const game = new Game();
    expect(game.player.name).toBe('player');
    expect(game.player.punts).toBe(0);
    expect(game.computer.name).toBe('dealer');
    expect(game.computer.punts).toBe(0);
    expect(game.currentPlayer).toEqual(game.player);
  });
  test('Unit test Game changeUser', ()=>{
    const game = new Game();
    game.currentPlayer=game.player;
    game.changeUser();
    expect(game.currentPlayer).toBe(game.computer);
    game.changeUser();
    expect(game.currentPlayer).toBe(game.player);
  });
  test('Test de Tornar cartes', ()=>{
    const game= new Game();
    const card = game.player.barajaGeneral.cards[0];
    game.player.afegirCartaArray(card);
    expect(game.player.baraja.length).toBe(1);
    game.tornarCartes();
    expect(game.player.baraja.length).toBe(0);
  });
  test('Test ResetPunts', ()=>{
    const game = new Game();
    game.player.punts=10;
    expect(game.player.punts).toBe(10);
    game.resetPoints();
    expect(game.player.punts).toBe(0);
  });
});
