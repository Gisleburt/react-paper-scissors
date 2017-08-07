import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponentCreator = (WrappedComponent) => {
  const button = ({ onclick }) => (
    <a role="button" tabIndex={0} onClick={onclick}>
      <WrappedComponent />
    </a>
  );
  button.propTypes = {
    onclick: PropTypes.func.isRequired,
  };
  return button;
};

export default ButtonComponentCreator;
