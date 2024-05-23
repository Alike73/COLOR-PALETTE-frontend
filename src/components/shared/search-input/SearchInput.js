import React, { useState } from 'react';
import inputIcon from '../../../assets/images/palette.svg';
import SearchInputDropdown from './SearchInputDropdown';

const SearchInput = ({ handleOpenEditor }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleFocus = () => {
        setDropdownVisible(true);
    };

    const handleBlur = (event) => {
        // Delay hiding the dropdown to allow click events within the dropdown
        setTimeout(() => setDropdownVisible(false), 200);
    };

    return (
        <div className="position-relative w-100">
            <form className="w-100" role="search">
                <div className="d-flex align-items-center">
                    <img 
                    className="me-2 palette-icon" 
                    src={inputIcon} 
                    alt="color palette"
                    onClick = { handleOpenEditor } 
                    />
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search Palettes..."
                        aria-label="Search Palettes"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
            </form>
            {isDropdownVisible && <SearchInputDropdown />}
        </div>
    );
};

export default SearchInput;
