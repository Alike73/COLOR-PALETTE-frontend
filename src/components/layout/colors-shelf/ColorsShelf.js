import React from 'react';
import Palettes from './Palettes';

const ColorsShelf = ({ filteredPalettes }) => {

    // row g-3

    return (
        <>
            <Palettes filteredPalettes = { filteredPalettes } />
        </>
    )
};

export default ColorsShelf;