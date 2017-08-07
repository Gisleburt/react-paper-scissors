import React from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = ({name = "World"}) => (
  <div>
    Hello {name}
  </div>
);

ReactDOM.render(<HelloComponent name="Daniel" />, document.getElementById('app'));
