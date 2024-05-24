import React from 'react';
import SearchInputDropdownBtn from '../buttons/SearchInputDropdownBtn';

const SearchInputDropdown = ({ filteredPalettes }) => {

    // Create a Set to keep track of unique categories
    // If User added by accident the category already exist, we just removing it from our new set
    const seenCategories = new Set();
    
    // Filter the palettes to remove duplicates
    const uniquePalettes = filteredPalettes.filter(item => {
        if (seenCategories.has(item.category)) {
            return false;
        } else {
            seenCategories.add(item.category);
            return true;
        }
    });

    return (
        <div className="dropdown-menu show position-absolute w-100 mt-2">
            <p className='lead fw-medium fs-4 text-primary ms-5 m-0 dropdown-title'>Collections</p>
            <div className='d-flex flex-wrap gap-2 justify-content-center py-3'>
                <SearchInputDropdownBtn category = 'ALL' />
                {uniquePalettes.map((item) => (
                    <SearchInputDropdownBtn 
                        key={item._id}
                        category={item.category}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
};

export default SearchInputDropdown;