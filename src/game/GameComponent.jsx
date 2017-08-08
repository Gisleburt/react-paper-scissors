import React from 'react';
import PropTypes from 'prop-types';
import RockIcon from '../icons/rock/RockIconComponent';
import PaperIcon from '../icons/paper/PaperIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import createButton from '../button/ButtonComponentCreator';
import Result from '../result/ResultComponent';
import { possibleChoices } from './GameActions';

const GameComponent = ({ actions, choices }) => {
  const RockButton = createButton(RockIcon);
  const PaperButton = createButton(PaperIcon);
  const ScissorsButton = createButton(ScissorsIcon);

  return (
    <section>
      <header>React Paper Scissors</header>
      <section className="results">
        <div>
          <Result choice={choices.playerChoice} />
          Your Result
        </div>
        <div>
          <Result choice={choices.aiChoice} />
          AI Result
        </div>
      </section>
      <section className="choices">
        <RockButton onclick={() => actions.makePlayerChoice(possibleChoices.ROCK)} />
        <PaperButton onclick={() => actions.makePlayerChoice(possibleChoices.PAPER)} />
        <ScissorsButton onclick={() => actions.makePlayerChoice(possibleChoices.SCISSORS)} />
      </section>
    </section>
  );
};

GameComponent.propTypes = {
  actions: PropTypes.shape({
    makePlayerChoice: PropTypes.func.isRequired,
    makeAiChoice: PropTypes.func.isRequired,
  }).isRequired,
  choices: PropTypes.shape({
    playerChoice: PropTypes.string,
    aiChoice: PropTypes.string,
  }).isRequired,
};

export default GameComponent;
