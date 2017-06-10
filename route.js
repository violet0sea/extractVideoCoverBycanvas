import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, News, BBS, Case, Product, TalentPool, CityPartners, AboutUs } from './src/dist/export';

const RootRoutes = (
        <Route path='/' component={App}>
            <IndexRoute component={Home} /> 
        </Route>
);

export default RootRoutes;