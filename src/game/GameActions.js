export const PLAYER_CHOICE = 'PLAYER_CHOICE';
export const AI_CHOICE = 'AI_CHOICE';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
export const possibleChoices = { ROCK, PAPER, SCISSORS };
const choiceArray = Object.keys(possibleChoices);

const winConditions = {
  [ROCK]: SCISSORS,
  [PAPER]: ROCK,
  [SCISSORS]: PAPER,
};

export const isWin = (player1, player2) => {
  if (!Object.hasOwnProperty.call(winConditions, player1) || !Object.hasOwnProperty.call(winConditions, player2)) {
    throw 'Invalid choice';
  }
  return winConditions[player1] === player2;
};

export const isDraw = (player1, player2) => {
  return player1 === player2;
};

export const randomChoice = () => choiceArray[Math.floor(Math.random() * choiceArray.length)];

export const playerChoiceAction = (choice) => ({
  type: PLAYER_CHOICE,
  choice,
});

export const aiChoiceAction = (choice) => ({
  type: AI_CHOICE,
  choice,
});
