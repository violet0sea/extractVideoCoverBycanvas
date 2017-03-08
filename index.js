import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import RootRoutes from './route';
import {changeHeaderToRed} from './reducers/reducer';
import './public/css/reset.scss';

const container = document.querySelector('#app');
const store = createStore(changeHeaderToRed);

render(
    <Provider store={store}>
        <Router routes={RootRoutes} history={browserHistory} />
    </Provider>,
    container
);

