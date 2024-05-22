import React from 'react';
import PaletteCardColorBox from './PaletteCardColorBox';

const PaletteCardBody = () => {

    return (
        <div className="card-body row g-2 row-cols-md-2 p-1">
            <PaletteCardColorBox />
            <PaletteCardColorBox />
            <PaletteCardColorBox />
            <PaletteCardColorBox />
        </div>
    )
};

export default PaletteCardBody;