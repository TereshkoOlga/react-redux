import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux" //создаем хранилище
import {Provider} from "react-redux"
import allReducers from './reducers'
import WebPage from './components/WebPage'

const store = createStore(allReducers)
//передаем объект с ред.серами из redusers/index.js

ReactDOM.render(
    // создаем доступ к хранилищу через провайдер
    <Provider store={store}>
      <WebPage/>
    </Provider>,
  document.getElementById('fieldToShow')
);
