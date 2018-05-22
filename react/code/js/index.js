import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux" //создаем хранилище
import allReducers from './reducers'

const store = createStore(allReducers)
//передаем объект с ред.серами из redusers/index.js

ReactDOM.render(
  <h2>Здесь может быть любой текст</h2>, 
  document.getElementById('fieldToShow')
);
