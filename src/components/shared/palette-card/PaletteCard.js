import React from 'react';
import ColorPaletteCardFooter from '../color-palette-card-footer/ColorPaletteCardFooter';
import PaletteCardDisplay from './PaletteCardDisplay';
import PaletteCardBody from './PaletteCardBody';

const PaletteCard = ({ title, color_1, color_2, color_3, color_4 }) => {

    return (
        <div className="col">
            <div className="card">
                <PaletteCardDisplay title = { title } color_1 = { color_1 } />
                <PaletteCardBody 
                    color_1 = { color_1 } 
                    color_2 = { color_2 } 
                    color_3 = { color_3 } 
                    color_4 = { color_4 } 
                />
                <ColorPaletteCardFooter />
            </div>
            <hr className='divider' />
        </div>
    )
};

export default PaletteCard;