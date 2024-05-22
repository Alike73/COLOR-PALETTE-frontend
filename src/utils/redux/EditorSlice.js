import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
    name: 'editorItems',

    initialState: {
        isActiveOpenBtn: false,
    },
    reducers: {
        setIsActiveOpenBtn: (state, action) => {
            state.isActiveOpenBtn = action.payload;
        },
    },
    
});

export const getActiveOpenEditorBtn = state => state.editorItems.isActiveOpenBtn;

export const { setIsActiveOpenBtn } = editorSlice.actions;
export default editorSlice.reducer;