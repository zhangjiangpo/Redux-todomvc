/**
 * Created by apple on 16/6/20.
 */
import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'


import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();
const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)