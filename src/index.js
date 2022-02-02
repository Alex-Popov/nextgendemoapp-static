import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContext from './context/AppContext';
import store from './store';

import { ThemeProvider } from '@material-ui/core/styles';
import themeConfig from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppLoading from './components/AppLoading';
import ToastManager from './components/ToastManager';
import Prompt from './components/Prompt';
import Dashboard from './pages/Dashboard';


ReactDOM.render(
    //<React.StrictMode>
        <ThemeProvider theme={themeConfig}>
            <CssBaseline />

            <Provider store={store}>
            <AppContext>
                <AppLoading />
                <ToastManager />
                <Prompt />

                <Dashboard />
			</AppContext>
            </Provider>
        </ThemeProvider>
    //</React.StrictMode>
    ,
    document.getElementById('root')
);
