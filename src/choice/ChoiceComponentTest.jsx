import React from 'react';
import { shallow } from 'enzyme';
import Choice from './ChoiceComponent';
import RockIcon from '../icons/rock/RockIconComponent';
import PaperIcon from '../icons/paper/PaperIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import QuestionIcon from '../icons/question/QuestionIconComponent';

describe('ChoiceComponent', () => {
  it('should return a QuestionIcon for an unknown choice', () => {
    const noChoiceWrapper = shallow(<Choice />);
    expect(noChoiceWrapper.matchesElement(<QuestionIcon />)).to.be.true;
    const nonsenseChoiceWrapper = shallow(<Choice choice="some-choice" />);
    expect(nonsenseChoiceWrapper.matchesElement(<QuestionIcon />)).to.be.true;
  });

  it('should return a RockIcon for an unknown Rock', () => {
    const wrapper = shallow(<Choice choice="ROCK" />);
    expect(wrapper.matchesElement(<RockIcon />)).to.be.true;
  });

  it('should return a PaperIcon for an unknown Paper', () => {
    const wrapper = shallow(<Choice choice="PAPER" />);
    expect(wrapper.matchesElement(<PaperIcon />)).to.be.true;
  });

  it('should return a ScissorsIcon for an unknown Scissors', () => {
    const wrapper = shallow(<Choice choice="SCISSORS" />);
    expect(wrapper.matchesElement(<ScissorsIcon />)).to.be.true;
  });
});
