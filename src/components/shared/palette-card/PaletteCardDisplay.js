import React from 'react';
import PaletteCardDisplayHeader from './PaletteCardDisplayHeader';

const PaletteCardDisplay = ({ title, hoveredColor  }) => {

    const colorDisplayBackground = {
        background: hoveredColor ? hoveredColor : null
    };

    return (
        <div className='color-display-outer p-1'>
            <PaletteCardDisplayHeader 
                title = { title } 
            />
            <div className="color-display" style = { colorDisplayBackground } />
        </div>
    )
};

export default PaletteCardDisplay;