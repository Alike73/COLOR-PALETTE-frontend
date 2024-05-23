import React from 'react';

const PaletteCardDisplayHeader = ({ title }) => {

    return (
        <div className="color-display-header mb-1">
            <p className='m-0 py-2 text-center'>
                { title }
            </p>
        </div>
    )
};

export default PaletteCardDisplayHeader;