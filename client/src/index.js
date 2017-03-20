/**
 * import dependencies
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';

/**
 * import reducers
 */
import reducers from './reducers/index';

import routes from './routes';


/**
 * Create stores
 */
 const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
 const store = createStoreWithMiddleware(reducers);

/**
 * Renders application to the dom
 */
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#app'));
