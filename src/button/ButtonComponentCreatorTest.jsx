import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import createButton from './ButtonComponentCreator';
import PaperIcon from '../icons/paper/PaperIconComponent';

// These tests could be simpler. Breaking PaperIcon will break the wrong test, but it'll do for now
describe('GameComponent', () => {
  it('should be a high order component', () => {
    const PaperButton = createButton(PaperIcon);
    const wrapper = shallow(<PaperButton onclick={() => {}} />);
    expect(wrapper.contains(<PaperIcon />)).to.be.true;
  });

  it('resulting component should get it\'s onclick called', () => {
    const spy = sinon.spy();
    const PaperButton = createButton(PaperIcon);
    const wrapper = shallow(<PaperButton onclick={spy} />);
    wrapper.simulate('click');
    expect(spy.calledOnce).to.be.true;
  });
});
