import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app.jsx';
import FourOhFour from './components/src/FourOhFour.jsx';
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
        <IndexRoute component={Songbox} />
        <Route path="/:notFound" component={FourOhFour} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'),
);
