import React from 'react';
import SearchInputDropdownBtn from '../buttons/SearchInputDropdownBtn';

const SearchInputDropdown = ({ filteredPalettes }) => {

    return (
        <div className="dropdown-menu show position-absolute w-100 mt-2">
            <p className='ms-5 m-0'>Collections</p>
            <div className='d-flex flex-wrap gap-2 justify-content-center py-3'>
                <SearchInputDropdownBtn category = 'ALL' />
                { filteredPalettes.map((item) => <SearchInputDropdownBtn 
                    key = { item._id }
                    category = { item.category }
                    title = { item.title } 
                />)}
            </div>
        </div>
    )
};

export default SearchInputDropdown;