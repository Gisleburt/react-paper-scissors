import React from 'react';
import { shallow } from 'enzyme';
import Result from './ResultComponent';
import RockIcon from '../icons/rock/RockIconComponent';
import PaperIcon from '../icons/paper/PaperIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import QuestionIcon from '../icons/question/QuestionIconComponent';

describe('ResultComponent', () => {
  it('should return a QuestionIcon for an unknown choice', () => {
    const noChoiceWrapper = shallow(<Result />);
    expect(noChoiceWrapper.matchesElement(<QuestionIcon />)).to.be.true;
    const nonsenseChoiceWrapper = shallow(<Result choice="some-choice" />);
    expect(nonsenseChoiceWrapper.matchesElement(<QuestionIcon />)).to.be.true;
  });

  it('should return a RockIcon for an unknown Rock', () => {
    const wrapper = shallow(<Result choice="ROCK" />);
    expect(wrapper.matchesElement(<RockIcon />)).to.be.true;
  });

  it('should return a PaperIcon for an unknown Paper', () => {
    const wrapper = shallow(<Result choice="PAPER" />);
    expect(wrapper.matchesElement(<PaperIcon />)).to.be.true;
  });

  it('should return a ScissorsIcon for an unknown Scissors', () => {
    const wrapper = shallow(<Result choice="SCISSORS" />);
    expect(wrapper.matchesElement(<ScissorsIcon />)).to.be.true;
  });
});
