import gameReducer from './GameReducer';
import { choices, playerChoiceAction, aiChoiceAction } from './GameActions';

describe('GameReducer', () => {
  it('should have an initial state in which both players choices are set to null', () => {
    const state = gameReducer();
    expect(state).to.have.property('playerChoice', null);
    expect(state).to.have.property('aiChoice', null);
  });

  it('should update the player choice with a player choice action', () => {
    const action = playerChoiceAction(choices.ROCK);
    const initialState = gameReducer();
    const state = gameReducer(initialState, action);
    expect(state).to.have.property('playerChoice', choices.ROCK);
    expect(state).to.have.property('aiChoice', null);
  });

  it('should update the player choice with a ai choice action', () => {
    const action = aiChoiceAction(choices.PAPER);
    const initialState = gameReducer();
    const state = gameReducer(initialState, action);
    expect(state).to.have.property('playerChoice', null);
    expect(state).to.have.property('aiChoice', choices.PAPER);
  });
});
