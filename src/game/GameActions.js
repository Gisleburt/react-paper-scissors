export const PLAYER_CHOICE = 'PLAYER_CHOICE';
export const AI_CHOICE = 'AI_CHOICE';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

export const choices = { ROCK, PAPER, SCISSORS };

export const playerChoiceAction = (choice) => ({
  type: PLAYER_CHOICE,
  choice,
});

export const aiChoiceAction = (choice) => ({
  type: AI_CHOICE,
  choice,
});
