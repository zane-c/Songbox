import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app.jsx';
import Welcome from './components/src/Welcome.jsx';
import Songbox from './components/songbox/Container.jsx';

import colorsMiddleware from './middleware/colors.js';
import songboxMiddleware from './middleware/songbox.js';

import colorsReducer from './reducers/colors.js';
import SongboxReducer from './reducers/songbox.js';

const rootMiddleware = [
  colorsMiddleware,
  songboxMiddleware,
];

const rootReducer = combineReducers({
  colors: colorsReducer,
  songbox: SongboxReducer,
  routing: routerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...rootMiddleware,
  ),
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/songbox" component={Songbox} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'),
);
