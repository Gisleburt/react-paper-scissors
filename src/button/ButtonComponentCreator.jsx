import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponentCreator = (WrappedComponent) => {
  const button = ({ onClick }) => (
    <a className="button" role="button" tabIndex={0} onClick={onClick}>
      <WrappedComponent />
    </a>
  );
  button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  return button;
};

export default ButtonComponentCreator;
