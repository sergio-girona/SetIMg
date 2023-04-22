import {afegirCartaDiv, novaPartida, playIA, stand} from './main.js';

document.getElementById('demanarCarta').disabled=true;
document.getElementById('plantar-se').disabled=true;

// Crida amb el boto demanarCarta la funció CreateCard
document.getElementById('demanarCarta').addEventListener('click',
    afegirCartaDiv);
// Crear partida
document.getElementById('començar').addEventListener('click', novaPartida);
// Habilitar botons
document.getElementById('començar').addEventListener('click', enableButton);
// Treure algunes dades de pantalla: p.
document.getElementById('començar').addEventListener('click', netejarPantalla);
// Plantar-se
document.getElementById('plantar-se').addEventListener('click', stand);
// cridar a la IA
document.getElementById('plantar-se').addEventListener('click', playIA);
// Deshabilitar botons
document.getElementById('plantar-se').addEventListener('click', disableButton);

// eslint-disable-next-line valid-jsdoc
/**
 * Funció per crear la carta (Vista)
 * @param {Card} card
 * @return {HTMLDivElement}
 */
export function renderCard(card) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const topSuit = document.createElement('div');
  topSuit.classList.add('card-suit-top');
  topSuit.innerText = card.suit;

  const cardNumber = document.createElement('div');
  cardNumber.classList.add('card-number');
  cardNumber.innerText = card.number.toString();

  const bottomSuit = document.createElement('div');
  bottomSuit.classList.add('card-suit-bottom');
  bottomSuit.innerText = card.suit;

  cardElement.appendChild(topSuit);
  cardElement.appendChild(cardNumber);
  cardElement.appendChild(bottomSuit);

  return cardElement;
}

/**
 * Funció per deshabilitar botons
 */
export function disableButton() {
  document.getElementById('plantar-se').disabled = true;
  document.getElementById('començar').disabled = false;
  document.getElementById('demanarCarta').disabled = true;
}

/**
 * Funció per habilitar botons
 */
function enableButton() {
  document.getElementById('plantar-se').disabled = false;
  document.getElementById('començar').disabled = true;
  document.getElementById('demanarCarta').disabled = false;
}

/**
 * Funció per netejar la pantalla
 */
function netejarPantalla() {
  document.getElementById('final').innerHTML='';
}

/**
 *Funció per trobar divs amb una classe
 * @return {NodeListOf<Element>}
 */
export function trobarClase() {
  return document.querySelectorAll('.cards-containers');
}

/**
 *Funció per buscar el div del jugador actual;
 * @param {String} playerName
 * @return {HTMLElement}
 */
export function buscarDivCurrentPlayer(playerName) {
  return document.getElementById('card-container-' + playerName);
}

/**
 * Funció que imprimeix la frase de Victoria o Perdre
 * @param {String}decisio
 * @param {String}player
 */
export function guanyarPerdre(decisio, player) {
  if (decisio === 'guanyar') {
    document.getElementById('final').
        innerHTML='HAS GUANYAT : '+ player.toUpperCase();
  }
  if (decisio==='perdre') {
    document.getElementById('final').
        innerHTML = 'HAS PERDUT : ' + player.toUpperCase();
  }
  if (decisio==='empatar') {
    document.getElementById('final').
        innerHTML = 'HAS PERDUT : ' + player.toUpperCase();
  }
}

/**
 * Funció que simula el clic de plantar-se
 */
export function clicarPlantar() {
  const element = document.getElementById('plantar-se');
  element.click();
}

const audio = document.getElementById('miAudio');
document.getElementById('començar').addEventListener('click', () => {
  audio.play();
});
