import React from 'react';
import SearchInput from '../../shared/search-input/SearchInput';

const Header = ({ headerIcon }) => {

    //  d-grid gap-3 align-items-center

    // d-flex align-items-center

    return (
        <header className="py-3 mb-3 border-bottom">
            <div className="container">
                <SearchInput />
            </div>
        </header>
    )
};

export default Header;