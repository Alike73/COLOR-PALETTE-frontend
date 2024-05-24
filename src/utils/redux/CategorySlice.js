import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'categoryItems',

    initialState: {
        selectedCategory: 'ALL',
        searchTerm: '',
        paletteName: null,
        showPaletteName: false
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setPaletteName: (state, action) => {
            state.paletteName = action.payload;
        },
        setShowPaletteName: (state, action) => {
            state.showPaletteName = action.payload;
        },
    },
});

export const getSelectedCategory = state => state.categoryItems.selectedCategory;
export const getSearchTerm = state => state.categoryItems.searchTerm;
export const getPaletteName = state => state.categoryItems.paletteName;
export const getShowPaletteName = state => state.categoryItems.showPaletteName;

export const { filterCategory, setSearchTerm, setPaletteName, setShowPaletteName } = categorySlice.actions;
export default categorySlice.reducer;


