import React from 'react';
import Palettes from './Palettes';

const ColorsShelf = ({ filteredPalettes, updatingInInput, setMyPalettes }) => {

    return (
        <>
            <Palettes 
                filteredPalettes = { filteredPalettes } 
                updatingInInput = { updatingInInput }
                setMyPalettes = { setMyPalettes } 
            />
        </>
    )
};

export default ColorsShelf;