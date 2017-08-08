import { PLAYER_CHOICE, AI_CHOICE, playerChoiceAction, aiChoiceAction } from './GameActions';

describe('GameActions', () => {
  it('playerChoiceAction - should create an action of type PLAYER_CHOICE', () => {
    const choice = 'choice';
    const action = playerChoiceAction(choice);
    expect(action).to.have.property('type', PLAYER_CHOICE);
    expect(action).to.have.property('choice', choice);
  });

  it('aiChoiceAction - should create an action of type AI_CHOICE', () => {
    const choice = 'choice';
    const action = aiChoiceAction(choice);
    expect(action).to.have.property('type', AI_CHOICE);
    expect(action).to.have.property('choice', choice);
  });
});
