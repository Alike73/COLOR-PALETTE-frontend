import React from 'react';
import ColorPaletteCardFooter from '../color-palette-card-footer/ColorPaletteCardFooter';
import PaletteCardDisplay from './PaletteCardDisplay';
import PaletteCardBody from './PaletteCardBody';

const PaletteCard = () => {

    return (
        <div className="col">
            <div className="card">
                <PaletteCardDisplay />
                <PaletteCardBody />
                <ColorPaletteCardFooter />
            </div>
            <hr className='divider' />
        </div>
    )
};

export default PaletteCard;