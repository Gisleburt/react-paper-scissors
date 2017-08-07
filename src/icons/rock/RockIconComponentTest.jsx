import React from 'react';
import { shallow } from 'enzyme';
import RockIcon from './RockIconComponent';

describe('RockIconComponent', () => {
  it('should be div', () => {
    const wrapper = shallow(<RockIcon />);
    expect(wrapper.is('div')).to.be.true;
  });
});
