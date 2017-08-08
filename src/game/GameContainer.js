import { connect } from 'react-redux';
import { playerChoiceAction, aiChoiceAction } from './GameActions';
import GameComponent from './GameComponent';

const mapStateToProps = (state) => ({
  choices: state.choices,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    makePlayerChoice: (choice) => dispatch(playerChoiceAction(choice)),
    makeAiChoice: (choice) => dispatch(aiChoiceAction(choice)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
