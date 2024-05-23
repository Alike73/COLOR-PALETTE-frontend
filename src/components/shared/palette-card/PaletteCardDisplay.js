import React from 'react';
import PaletteCardDisplayHeader from './PaletteCardDisplayHeader';

const PaletteCardDisplay = ({ title, color_1 }) => {

    // const colorDisplayBackground = {
    //     background: color_1 
    // };

    // style = { colorDisplayBackground }

    return (
        <div className='color-display-outer p-1'>
            <PaletteCardDisplayHeader title = { title } />
            <div className="color-display" />
        </div>
    )
};

export default PaletteCardDisplay;