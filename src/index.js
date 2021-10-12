import './styles.css';

const playerContainer = document.querySelector('.score-list');

const playerList = [
  {
    player: 'Azula',
    score: 300,
  },
  {
    player: 'Zuko',
    score: 200,
  },
  {
    player: 'Aang',
    score: 250,
  },
  {
    player: 'Sokka',
    score: 100,
  },
];

const showPlayers = (list) => `
<li class="scores">
<span>${list.player}</span>
<span class="scores-span">${list.score}</span>
</li>
`;
playerContainer.innerHTML = playerList.map((list) => showPlayers(list)).join('');