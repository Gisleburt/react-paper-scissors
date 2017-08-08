import React from 'react';
import PropTypes from 'prop-types';
import RockIcon from '../icons/rock/RockIconComponent';
import PaperIcon from '../icons/paper/PaperIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import createButton from '../button/ButtonComponentCreator';
import Choice from '../choice/ChoiceComponent';
import { possibleChoices, randomChoice } from './GameActions';

import './Game.scss';

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.makeChoice = this.makeChoice.bind(this);
    this.resetChoices = this.resetChoices.bind(this);
  }

  makeChoice(choice) {
    this.props.actions.makePlayerChoice(choice);
    this.props.actions.makeAiChoice(randomChoice());
  }

  resetChoices() {
    this.props.actions.makePlayerChoice(null);
    this.props.actions.makeAiChoice(null);
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
            <Choice choice={choices.playerChoice} />
            Your Choice
          </div>
          <div className="game-component__choice">
            <Choice choice={choices.aiChoice} />
            AI Choice
          </div>
        </section>
        <section className={`game-component__buttons ${choices.playerChoice ? 'hidden' : ''}`}>
          <RockButton onClick={() => this.makeChoice(possibleChoices.ROCK)} />
          <PaperButton onClick={() => this.makeChoice(possibleChoices.PAPER)} />
          <ScissorsButton onClick={() => this.makeChoice(possibleChoices.SCISSORS)} />
        </section>
        <section className={`game-component__buttons ${choices.playerChoice ? '' : 'hidden'}`}>
          <a className="button" role="button" tabIndex={0} onClick={() => this.resetChoices()}>Play Again?</a>
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
