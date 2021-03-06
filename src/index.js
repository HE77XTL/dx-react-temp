import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router/router'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import ReduxThunk from 'redux-thunk'
import {createLogger} from 'redux-logger';

import AppRedux from './reducers/index'

const logger = createLogger();

const store = createStore(AppRedux, applyMiddleware(ReduxThunk, logger))

console.log('store')
console.log(store)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
