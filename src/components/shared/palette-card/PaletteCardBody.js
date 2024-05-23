import React from 'react';
import PaletteCardColorBox from './PaletteCardColorBox';

const PaletteCardBody = ({ color_1, color_2, color_3, color_4, onHover, onLeave }) => {

    return (
        <div className="card-body row g-2 row-cols-md-2 p-1">
            <PaletteCardColorBox color_bg = { color_1 } onHover = { onHover } onLeave = { onLeave } />
            <PaletteCardColorBox color_bg = { color_2 } onHover = { onHover } onLeave = { onLeave } />
            <PaletteCardColorBox color_bg = { color_3 } onHover = { onHover } onLeave = { onLeave } />
            <PaletteCardColorBox color_bg = { color_4 } onHover = { onHover } onLeave = { onLeave } />
        </div>
    )
};

export default PaletteCardBody;