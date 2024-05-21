import React from 'react';
import SearchInputDropdownBtn from '../buttons/SearchInputDropdownBtn';

const SearchInputDropdown = () => {

    return (
        <div className="dropdown-menu show position-absolute w-100 mt-2">
            {/* Add your dropdown content here */}
            <p className='ms-5 m-0'>Collections</p>
            <div className='d-flex flex-wrap gap-2 justify-content-center py-3'>
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
                <SearchInputDropdownBtn />
            </div>
        </div>
    )
};

export default SearchInputDropdown;