import React from 'react';
import PaperIcon from '../icons/paper/PaperIconComponent';
import RockIcon from '../icons/rock/RockIconComponent';
import ScissorsIcon from '../icons/scissors/ScissorsIconComponent';
import createButton from '../button/ButtonComponentCreator';

const GameComponent = () => {
  const RockButton = createButton(RockIcon);
  const PaperButton = createButton(PaperIcon);
  const ScissorsButton = createButton(ScissorsIcon);

  return (
    <section>
      <header>React Paper Scissors</header>
      <section className="results">
        <RockIcon />
        <PaperIcon />
        <ScissorsIcon />
      </section>
      <section className="buttons">
        <RockButton onclick={() => {}} />
        <PaperButton onclick={() => {}} />
        <ScissorsButton onclick={() => {}} />
      </section>
    </section>
  );
};

export default GameComponent;
