import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, News, BBS, Case, Product, TalentPool, CityPartners, AboutUs } from './src/dist/export';

const RootRoutes = (
        <Route path='/' component={App}>
            <IndexRoute component={Home} /> 
            <Route path='news' component={News} /> 
            <Route path='bbs' component={BBS} /> 
            <Route path='case' component={Case} /> 
            <Route path='product' component={Product} /> 
            <Route path='cityPartners' component={CityPartners} /> 
            <Route path='aboutUs' component={AboutUs} /> 
            <Route path='talentPool' component={TalentPool} /> 
            <Route path='admin' component={TalentPool} /> 
        </Route>
);

export default RootRoutes;