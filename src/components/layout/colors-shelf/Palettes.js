import React from 'react';
import PaletteCard from '../../shared/palette-card/PaletteCard';

const Palettes = ({ filteredPalettes }) => {

    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        { filteredPalettes.map((item) => <PaletteCard 
            key = { item._id } 
            title = { item.title } 
            color_1 = { item.color_1 }
            color_2 = { item.color_2 }
            color_3 = { item.color_3 }
            color_4 = { item.color_4 }
        />)}
            {/* <PaletteCard />
            <PaletteCard />
            <PaletteCard /> */}
        </div>
    )
};

export default Palettes;