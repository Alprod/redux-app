import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { createStore, combineReducers } from "redux";
import dragonReducer from "./Reducers/dragonReducer";
import knightReducer from "./Reducers/knightReducer";
import logReducer from "./Reducers/logReducer";
//CombineReducers nous permet de regrouper les reducers ou providers
//dans le cas ou nous en avons plusieur afin de le injecter dans le Store
const reducers = combineReducers({
    dragonReducer,
    knightReducer,
    logReducer
});
const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
