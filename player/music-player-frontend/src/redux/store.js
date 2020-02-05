//External Dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Internal Dependencies
import reducer from './reducer';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

let store = createStore(
  reducer,
  // composeEnhancers(
    applyMiddleware(thunk)
  // )
);

export default store
