import React from 'react';
import PropTypes from 'prop-types';
import { isWin, isDraw } from '../game/GameActions';

const ResultComponent = ({ playerChoice, aiChoice }) => {
  if (!playerChoice || !aiChoice) {
    return null;
  }
  if (isWin(playerChoice, aiChoice)) {
    return <div>You win!</div>;
  }
  if (isDraw(playerChoice, aiChoice)) {
    return <div>Its a draw!</div>;
  }
  return <div>You lose!</div>;
};

ResultComponent.propTypes = {
  playerChoice: PropTypes.string,
  aiChoice: PropTypes.string,
};

ResultComponent.defaultProps = {
  playerChoice: null,
  aiChoice: null,
};

export default ResultComponent;
