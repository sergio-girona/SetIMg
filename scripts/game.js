import Jugador from './jugador.js';

/**
 * Classe Game
 */
export default class Game {
  /**
   * Constructor Game
   */
  constructor() {
    this.player=new Jugador('player', 0);
    this.computer=new Jugador('dealer', 0);
    this.currentPlayer=this.player;
  }

  /**
   * Funció per canviar d'usuari
   */
  changeUser() {
    if (this.currentPlayer===this.player) {
      this.currentPlayer=this.computer;
    } else {
      this.currentPlayer=this.player;
    }
  }

  /**
   * Funció per tornar les cartes a la baralla
   */
  tornarCartes() {
    let i;
    for (i=0; i<this.player.baraja.length; i++) {
      this.player.barajaGeneral.cards.push(this.player.baraja[i]);
    }
    for (i=0; i<this.computer.baraja.length; i++) {
      this.computer.barajaGeneral.cards.push(this.computer.baraja[i]);
    }
    // buidar array jugadors
    this.player.baraja=[];
    this.computer.baraja=[];
  }

  /**
   * Funció per reiniciar els punts
   */
  resetPoints() {
    this.player.punts=0;
    this.computer.punts=0;
  }
}
