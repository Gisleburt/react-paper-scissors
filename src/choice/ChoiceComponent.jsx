import React from 'react';
import PropTypes from 'prop-types';
import RockIcon from '../icons/rock/RockIconComponent';
import PaperIcon from '../icons/paper/PaperIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import QuestionIcon from '../icons/question/QuestionIconComponent';
import { possibleChoices } from '../game/GameActions';

const mapChoiceToIcon = {
  [possibleChoices.ROCK]: RockIcon,
  [possibleChoices.PAPER]: PaperIcon,
  [possibleChoices.SCISSORS]: ScissorsIcon,
};

const ChoiceComponent = ({ choice }) => {
  if (Object.hasOwnProperty.call(mapChoiceToIcon, choice)) {
    const ResultIcon = mapChoiceToIcon[choice];
    return <ResultIcon />;
  }
  return <QuestionIcon />;
};

ChoiceComponent.propTypes = {
  choice: PropTypes.string,
};

ChoiceComponent.defaultProps = {
  choice: null,
};

export default ChoiceComponent;
