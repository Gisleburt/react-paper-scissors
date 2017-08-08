import React from 'react';
import { shallow } from 'enzyme';
import Game from './GameComponent';

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
});
