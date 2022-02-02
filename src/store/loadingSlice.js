import { createSlice } from '@reduxjs/toolkit';


const NAME = 'loading';


//
// Reducer
//

export const loadingSlice = createSlice({
    name: NAME,
    initialState: {
        isShow: false
    },
    reducers: {
        showLoading: state => {
            state.isShow = true;
        },
        hideLoading: state => {
            state.isShow = false;
        }
    }
});

export default loadingSlice.reducer;



//
// Actions
//

export const { showLoading, hideLoading } = loadingSlice.actions;



//
// Selectors
//

export const selectLoadingState = state => state[NAME].isShow;