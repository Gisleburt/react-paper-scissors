import React from 'react';
import { shallow } from 'enzyme';
import Game from './GameComponent';

describe('GameComponent', () => {
  it('should be section', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.is('section')).to.be.true;
  });
});
