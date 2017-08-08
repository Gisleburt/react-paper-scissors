import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Game from './game/GameContainer';
import choices from './game/GameReducer';

import './reset.scss';

const store = createStore(combineReducers({ choices }));

const app = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(app, window.document.getElementById('app'));
