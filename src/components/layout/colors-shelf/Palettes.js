import React from 'react';
import PaletteCard from '../../shared/palette-card/PaletteCard';

const Palettes = () => {

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            <PaletteCard />
            <PaletteCard />
            <PaletteCard />
        </div>
    )
};

export default Palettes;