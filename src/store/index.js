import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import loadingReducer from './loadingSlice';
import alertsReducer from './alertsSlice';

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        alerts: alertsReducer
    },
    middleware: [thunk]
});

export default store;