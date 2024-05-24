import React, { useState } from 'react';
import inputIcon from '../../../assets/images/palette.svg';
import SearchInputDropdown from './SearchInputDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveHeader } from '../../../utils/redux/HeaderSlice';
import { filterCategory, getSearchTerm, getShowPaletteName, setSearchTerm, setShowPaletteName } from '../../../utils/redux/CategorySlice';
import InputInfoBtn from './InputInfoBtn';

const SearchInput = ({ handleOpenEditor, filteredPalettes }) => {


    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const isActiveHeader = useSelector(getActiveHeader);
    const searchTerm = useSelector(getSearchTerm);
    const showPaletteName = useSelector(getShowPaletteName);
    const dispatch = useDispatch();

    const handleSearchTerm = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }
    

    const handleFocus = () => {
        setDropdownVisible(true);
        dispatch(setShowPaletteName(false))
        dispatch(filterCategory('ALL'))
    };

    const handleBlur = () => {
        // Delay hiding the dropdown to allow click events within the dropdown
        setTimeout(() => setDropdownVisible(false), 200);
    };

    return (
        <div className="position-relative w-100">
            <div className="d-flex align-items-center">
                <img 
                className={ `me-2 palette-icon ${ isActiveHeader ? "active" : "" }` } 
                src={inputIcon} 
                alt="color palette"
                onClick = { handleOpenEditor } 
                />
                <div className="search-input-wrapper p-1">
                    { showPaletteName && <InputInfoBtn /> }
                    <input
                        type="search"
                        className="form-control search-input"
                        placeholder="Search Palettes..."
                        aria-label="Search Palettes"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={ searchTerm }
                        onChange={ handleSearchTerm }
                    />
                </div>
            </div>
            {isDropdownVisible && <SearchInputDropdown filteredPalettes = { filteredPalettes } />}
        </div>
    );
};

export default SearchInput;
