import './styles.css';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ETFTbnMYzSTF8MDXXJqB/scores';

fetch(baseUrl)

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ETFTbnMYzSTF8MDXXJqB/scores', {
//   method: 'POST',
//   body: JSON.stringify({
// 	"user": "John Doe",
// 	"score": 42
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

// const playerContainer = document.querySelector('.score-list');
// // const button = document.querySelector('.btn');

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