import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'categoryItems',

    initialState: {
        selectedCategory: 'ALL',
        searchTerm: ''
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
});

export const getSelectedCategory = state => state.categoryItems.selectedCategory;
export const getSearchTerm = state => state.categoryItems.searchTerm;

export const { filterCategory, setSearchTerm } = categorySlice.actions;
export default categorySlice.reducer;


