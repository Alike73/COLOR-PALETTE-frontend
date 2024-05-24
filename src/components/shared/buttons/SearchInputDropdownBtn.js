import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory, setPaletteName, setSearchTerm, setShowPaletteName } from '../../../utils/redux/CategorySlice';

const SearchInputDropdownBtn = ({ category, title }) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    const handleFilteredCategory = () => {
        dispatch(filterCategory(category))
        dispatch(setSearchTerm(''))
        dispatch(setPaletteName(title))
        if (category !== 'ALL') {
            dispatch(setShowPaletteName(true))
        }else {
            dispatch(setShowPaletteName(false))
        }
    };

    return (
        <button 
            className={ `btn btn-sm rounded-pill px-3 ${ selectedCategory === category ? "btn-primary" : "btn-outline-primary" }` } 
            type="button"
            onClick = { handleFilteredCategory }
            >
            { category }
        </button>
    )
};

export default SearchInputDropdownBtn;