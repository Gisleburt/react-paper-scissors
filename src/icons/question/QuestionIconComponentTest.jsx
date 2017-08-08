import React from 'react';
import { shallow } from 'enzyme';
import QuestionIcon from './QuestionIconComponent';

describe('QuestionIconComponent', () => {
  it('should be div', () => {
    const wrapper = shallow(<QuestionIcon />);
    expect(wrapper.is('div')).to.be.true;
  });
});
