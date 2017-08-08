import React from 'react';
import { shallow } from 'enzyme';
import Game from './GameComponent';
import sinon from 'sinon';

describe('GameComponent', () => {
  const defaultProps = {
    actions: {
      makePlayerChoice: () => {},
      makeAiChoice: () => {},
    },
    choices: {
      playerChoice: '',
      aiChoice: '',
    },
  };

  it('should be section', () => {
    const wrapper = shallow(<Game {...defaultProps} />);
    expect(wrapper.is('section')).to.be.true;
  });

  it('should fire both actions when the user makes a choice', () => {
    const makePlayerChoiceSpy = sinon.spy();
    const makeAiChoiceSpy = sinon.spy();
    const actions = {
      makePlayerChoice: makePlayerChoiceSpy,
      makeAiChoice: makeAiChoiceSpy,
    };
    const wrapper = shallow(<Game {...defaultProps} actions={actions} />);
    wrapper.instance().makeChoice('choice');
    expect(makePlayerChoiceSpy.calledOnce).to.be.true;
    expect(makeAiChoiceSpy.calledOnce).to.be.true;
  });
});
