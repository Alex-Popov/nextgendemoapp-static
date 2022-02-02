import { nanoid, createSlice, createAction } from '@reduxjs/toolkit';


const NAME = 'alerts';

const ALERT_SEVERITY_INFO = 'info';
const ALERT_SEVERITY_WARNING = 'warning';
const ALERT_SEVERITY_ERROR = 'error';
const ALERT_SEVERITY_SUCCESS = 'success';


//
// Reducer
//

export const alertsSlice = createSlice({
    name: NAME,
    initialState: {
        alerts: []
    },
    reducers: {
        addAlert: (state, action) => {
            state.alerts.push(action.payload);
        },
        deleteAlert: (state, action) => {
            state.alerts = state.alerts.filter(a => a.id !== action.payload);
        },
        clearAll: state => {
            state.alerts = [];
        }
    }
});

export default alertsSlice.reducer;



//
// Actions
//

export const { deleteAlert, clearAll } = alertsSlice.actions;

// overload addAlert from slice.actions
export const addAlert = createAction(
    'alerts/addAlert',
    (severity = ALERT_SEVERITY_INFO, delay = 0, message = '') => ({
        payload: {
            id: nanoid(),
            severity,
            delay,
            message
        }
    })
);

const curriedAddAlert = severity => delay => message => addAlert(severity, delay, message);

export const addInfoAlert = curriedAddAlert(ALERT_SEVERITY_INFO)(10000);
export const addWarningAlert = curriedAddAlert(ALERT_SEVERITY_WARNING)(5000);
export const addErrorAlert = curriedAddAlert(ALERT_SEVERITY_ERROR)(10000);
export const addSuccessAlert = curriedAddAlert(ALERT_SEVERITY_SUCCESS)(3000);


//
// Selectors
//

export const selectAlerts = state => state[NAME].alerts;
