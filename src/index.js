import './styles.css';

const playerContainer = document.querySelector('.score-list');
const button = document.querySelector('.btn');

const playerList = (e) => {
  e.preventDefault();
  const playerNames = document.querySelector('.name');
  const playerScores = document.querySelector('.score');
  playerContainer.innerHTML = `
  <li class="scores">
  <span>${playerNames.value}</span>
  <span class="scores-span">${playerScores.value}</span>
  </li>
  `;
};
button.addEventListener('click', playerList);

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