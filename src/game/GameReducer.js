import { PLAYER_CHOICE, AI_CHOICE } from './GameActions';

const defaultState = {
  playerChoice: null,
  aiChoice: null,
};

const gameReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case PLAYER_CHOICE: {
      const newChoice = { playerChoice: action.choice };
      return { ...state, ...newChoice };
    }
    case AI_CHOICE: {
      const newChoice = { aiChoice: action.choice };
      return { ...state, ...newChoice };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
