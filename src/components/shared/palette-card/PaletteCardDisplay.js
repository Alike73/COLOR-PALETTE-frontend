import React from 'react';
import PaletteCardDisplayHeader from './PaletteCardDisplayHeader';

const PaletteCardDisplay = () => {

    return (
        <div className='color-display-outer p-1'>
            <PaletteCardDisplayHeader />
            <div className="color-display" />
        </div>
    )
};

export default PaletteCardDisplay;