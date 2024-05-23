import React from 'react';
import PaletteCardDisplayHeader from './PaletteCardDisplayHeader';

const PaletteCardDisplay = ({ title, color_1, hoveredColor  }) => {

    const colorDisplayBackground = {
        background: hoveredColor ? hoveredColor : null
    };

    // style = { colorDisplayBackground }

    return (
        <div className='color-display-outer p-1'>
            <PaletteCardDisplayHeader title = { title } />
            <div className="color-display" style = { colorDisplayBackground } />
        </div>
    )
};

export default PaletteCardDisplay;