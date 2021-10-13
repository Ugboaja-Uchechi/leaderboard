import './styles.css';

const playerContainer = document.querySelector('.score-list');
const button = document.querySelector('.btn');

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

async function getPlayers(e) {
  e.preventDefault();
  const response = await fetch(baseUrl);
  const data = await response.json();
  const { user, score } = data;
  document.querySelector('.name');
  document.querySelector('.score');
  playerContainer.innerHTML = `
  <li class="scores">
  <span>${user.value}</span>
  <span class="scores-span">${score.value}</span>
  </li>
  `;
}
button.addEventListener('click', getPlayers);
// const postPlayers = await fetch(baseUrl);
// const response =

// const playerList = [
//   {
//     player: 'Azula',
//     score: 300,
//   },
//   {
//     player: 'Zuko',
//     score: 200,
//   },
//   {
//     player: 'Aang',
//     score: 250,
//   },
//   {
//     player: 'Sokka',
//     score: 100,
//   },
// ];

// const showPlayers = (list) => `
// <li class="scores">
// <span>${list.player}</span>
// <span class="scores-span">${list.score}</span>
// </li>
// `;
// playerContainer.innerHTML = playerList.map((list) => showPlayers(list)).join('');