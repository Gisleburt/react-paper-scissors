import React from 'react';
import PropTypes from 'prop-types';
import RockIcon from '../icons/rock/RockIconComponent';
import PaperIcon from '../icons/paper/PaperIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import createButton from '../button/ButtonComponentCreator';
import Result from '../result/ResultComponent';
import { possibleChoices, randomChoice } from './GameActions';

import './Game.scss';

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.makeChoice = this.makeChoice.bind(this);
  }

  makeChoice(choice) {
    this.props.actions.makePlayerChoice(choice);
    this.props.actions.makeAiChoice(randomChoice());
  }

  render() {
    const { choices } = this.props;
    const RockButton = createButton(RockIcon);
    const PaperButton = createButton(PaperIcon);
    const ScissorsButton = createButton(ScissorsIcon);

    return (
      <section className="game-component">
        <header className="game-component__header">React Paper Scissors</header>
        <section className="game-component__choices">
          <div className="game-component__choice">
            <Result choice={choices.playerChoice} />
            Your Result
          </div>
          <div className="game-component__choice">
            <Result choice={choices.aiChoice} />
            AI Result
          </div>
        </section>
        <section className="game-component__buttons">
          <RockButton onclick={() => this.makeChoice(possibleChoices.ROCK)} />
          <PaperButton onclick={() => this.makeChoice(possibleChoices.PAPER)} />
          <ScissorsButton onclick={() => this.makeChoice(possibleChoices.SCISSORS)} />
        </section>
      </section>
    );
  }
}

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
