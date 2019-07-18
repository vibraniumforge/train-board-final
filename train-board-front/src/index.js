import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
// eslint-disable-next-line
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
import "./index.css";
import App from "./App";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// The Redux dev tools throw an error here.
// If the program does not workm comment OUT the above line and comment IN the below line

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
