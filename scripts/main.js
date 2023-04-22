import Game from './game.js';
import {disableButton, trobarClase, renderCard, buscarDivCurrentPlayer,
  guanyarPerdre, clicarPlantar} from './vista.js';

const partida = new Game();
// Començar partida: borra els contenidors de cartes, torna
// les cartes a la barallaGeneral llavors dona una
// carta a cadascun dels jugadors.
/**
 *  Començar partida: borra els contenidors de cartes, torna
 *  les cartes a la barallaGeneral llavors dona una
 *  carta a cadascun dels jugadors.
 */
export function novaPartida() {
  partida.resetPoints();
  const div = trobarClase();
  div.forEach(function(div) {
    div.innerHTML='';
  });
  partida.tornarCartes();
  partida.currentPlayer.barajaGeneral.shuffleArray();
  stand();
  afegirCartaDiv();
  stand();
  afegirCartaDiv();
}

/**
 * Afegeix la carta al div. que toca
  */
export function afegirCartaDiv() {
  const lastCard = partida.currentPlayer.barajaGeneral.cards.length - 1;
  const cardContainer = buscarDivCurrentPlayer(partida.currentPlayer.name);
  const card = partida.currentPlayer.barajaGeneral.cards[lastCard];
  const cardElement = renderCard(card);
  // Puntuació
  const cardValue=partida.currentPlayer.barajaGeneral.cards[lastCard].valor;
  partida.currentPlayer.punts=partida.currentPlayer.punts+cardValue;
  validadorPunts(card, cardElement, cardContainer);
}

/**
 *Funció per donar cartes
 * @param {Card}card
 * @param {HTMLDivElement} cardElement
 * @param {HTMLBodyElement} cardContainer
 */
function validadorPunts(card, cardElement, cardContainer) {
  if (partida.currentPlayer.punts<7.5) {
    donarCartaAlJugador(card, cardElement, cardContainer);
  } else if (partida.currentPlayer.punts===7.5) {
    clicarPlantar();
    cardContainer.appendChild(cardElement);
    disableButton();
  } else {
    guanyarPerdre('perdre', partida.currentPlayer.name);
    cardContainer.appendChild(cardElement);
    disableButton();
  }
}

/**
 * Funció per donar cartes
 * @param {Card}card
 * @param {HTMLDivElement} cardElement
 * @param {HTMLBodyElement} cardContainer
 */
function donarCartaAlJugador(card, cardElement, cardContainer) {
  partida.currentPlayer.barajaGeneral.cards.pop();
  cardContainer.appendChild(cardElement);
  partida.currentPlayer.afegirCartaArray(card);
}

/**
 * Funció plantar-se
 */
export function stand() {
  partida.changeUser();
}

/**
 * Funció perquè la IA demani
 */
export function playIA() {
  let parar = false;
  while (!parar) {
    if (partida.computer.punts<6.5) {
      afegirCartaDiv();
    } else {
      parar=true;
    }
  }
  validadorFinal();
  stand();
  partida.resetPoints();
}

/**
 *Funció valida Final
 */
function validadorFinal() {
  if (partida.computer.punts<=7.5) {
    if (partida.player.punts>partida.computer.punts) {
      guanyarPerdre('guanyar', 'player');
    }
    if (partida.player.punts===partida.computer.punts) {
      guanyarPerdre('empatar', 'player');
    } else {
      guanyarPerdre('perdre', 'player');
    }
  }
  if (partida.computer.punts>7.5) {
    if (partida.player.punts<=7.5) {
      guanyarPerdre('guanyar', 'player');
    } else {
      guanyarPerdre('perdre', 'player');
    }
  }
}
