import React from 'react';
import { shallow } from 'enzyme';
import PaperIcon from './PaperIconComponent';

describe('PaperIconComponent', () => {
  it('should be div', () => {
    const wrapper = shallow(<PaperIcon />);
    expect(wrapper.is('div')).to.be.true;
  });
});
