import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import RootRoutes from './route';
import { getInitialNews, changeInitialNews } from './reducers/reducer';
import './public/css/reset.scss';

const container = document.querySelector('#app');
const store = createStore(combineReducers({getInitialNews, changeInitialNews}));

render(
    <Provider store={store}>
        <Router routes={RootRoutes} history={browserHistory} />
    </Provider>,
    container
);

