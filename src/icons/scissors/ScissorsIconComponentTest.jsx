import React from 'react';
import { shallow } from 'enzyme';
import ScissorsIcon from './ScissorsIconComponent';

describe('ScissorsIconComponent', () => {
  it('should be div', () => {
    const wrapper = shallow(<ScissorsIcon />);
    expect(wrapper.is('div')).to.be.true;
  });
});
