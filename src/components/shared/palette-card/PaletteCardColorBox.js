import React from 'react';
import CopyBtn from '../buttons/CopyBtn';
import CopyBtnTwo from '../buttons/CopyBtnTwo';

const PaletteCardColorBox = () => {

    return (
        <div className="col color-box">
            <div className="color-place">
                <CopyBtn />
                <CopyBtnTwo />
            </div>
        </div>
    )
};

export default PaletteCardColorBox;