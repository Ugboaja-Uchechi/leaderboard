const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'Zl4d7IVkemOTTVV';

const createGame = async (gameName) => {
  const response = await fetch(apiURL, {

    method: 'POST',
    body: JSON.stringify({ name: `${gameName}` }),
    headers: {
      'Content-type': 'application/json',
    },

  });

  const gameData = await response.json();
  return gameData;
};

const fetchUser = async () => {
  const response = await fetch(`${apiURL}${gameId}/scores/`);
  const userData = await response.json();
  return userData;
};

const createUser = async (userName, userScore) => {
  const resp = await fetch(`${apiURL}${gameId}/scores/`, {

    method: 'POST',
    body: JSON.stringify({ user: userName, score: userScore }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const userData = await resp.json();

  return userData;
};

export { createUser, fetchUser, createGame };