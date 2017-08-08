export const PLAYER_CHOICE = 'PLAYER_CHOICE';
export const AI_CHOICE = 'AI_CHOICE';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

export const possibleChoices = { ROCK, PAPER, SCISSORS };

const choiceArray = Object.keys(possibleChoices);

export const randomChoice = () => choiceArray[Math.floor(Math.random() * choiceArray.length)];

export const playerChoiceAction = (choice) => ({
  type: PLAYER_CHOICE,
  choice,
});

export const aiChoiceAction = (choice) => ({
  type: AI_CHOICE,
  choice,
});
