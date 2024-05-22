import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
    name: 'headerItems',

    initialState: {
        isActiveHeader: false,
    },
    reducers: {
        setIsActiveHeader: (state, action) => {
            state.isActiveHeader = action.payload;
        },
    },
    
});

export const getActiveHeader = state => state.headerItems.isActiveHeader;

export const { setIsActiveHeader } = headerSlice.actions;
export default headerSlice.reducer;