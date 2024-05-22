
import { configureStore } from '@reduxjs/toolkit';
import headerItems from './HeaderSlice';
import categoryItems from './CategorySlice';
import editorItems from './EditorSlice';

export default configureStore({
    reducer: {
        headerItems,
        categoryItems,
        editorItems
    }
});