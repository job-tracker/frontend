import React from 'react';
import ReactDOM from 'react-dom';

// Redux to be added later
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

import 'normalize.css/normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
