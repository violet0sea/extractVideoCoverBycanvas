import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import RootRoutes from './route';
import './public/css/reset.scss';

const container = document.querySelector('#app');

render(
    <Router routes={RootRoutes} history={browserHistory} />,
    container
);

