import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RootRoutes from './route';
import { getInitialNews, changeInitialNews } from './reducers/reducer';
import './public/css/reset.scss';

const container = document.querySelector('#app');
const store = createStore(combineReducers({getInitialNews, changeInitialNews}));
const muiTheme = getMuiTheme({
  fontFamily: '-apple-system,BlinkMacSystemFont,Heiti SC,Helvetica,Hiragino Sans GB,PingFang SC,Century Gothic,Microsoft YaHei,system, Arial, Verdana, Tahoma,sans-serif'
});
injectTapEventPlugin();

render(
	<MuiThemeProvider muiTheme={muiTheme}>
	    <Provider store={store}>
	        <Router routes={RootRoutes} history={browserHistory} />
	    </Provider>
   </MuiThemeProvider>,
    container
);

