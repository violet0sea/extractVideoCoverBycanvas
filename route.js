import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home } from './src/dist/export';
console.log('____', App)
const RootRoutes = (
        <Route path='/' component={App}>
            <IndexRoute component={Home} /> 
        </Route>
);

export default RootRoutes;