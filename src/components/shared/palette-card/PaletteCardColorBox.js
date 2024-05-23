import React from 'react';
import CopyBtn from '../buttons/CopyBtn';
import CopyBtnTwo from '../buttons/CopyBtnTwo';

const PaletteCardColorBox = ({ color_bg }) => {

    const colorBoxBackground = {
        background: color_bg 
    };

    return (
        <div className="col color-box">
            <div className="color-place" style = { colorBoxBackground }>
                <CopyBtn />
                <CopyBtnTwo />
            </div>
        </div>
    )
};

export default PaletteCardColorBox;