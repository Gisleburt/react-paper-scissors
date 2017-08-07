import React from 'react';
import { shallow } from 'enzyme';
import createButton from './ButtonComponentCreator';
import PaperIcon from '../icons/paper/PaperIconComponent';

describe('GameComponent', () => {
  it('should be a high order component', () => {
    // This test could be simpler. Breaking PaperIcon will break the wrong test. But it'll do for now
    const PaperButton = createButton(PaperIcon);
    const wrapper = shallow(<PaperButton />);
    expect(wrapper.contains(<PaperIcon />)).to.be.true;
  });
});
