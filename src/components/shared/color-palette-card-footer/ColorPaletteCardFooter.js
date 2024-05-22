import React from 'react';
import EditBtn from '../buttons/EditBtn';
import DeleteBtn from '../buttons/DeleteBtn';

const ColorPaletteCardFooter = () => {

    return (
        <div className="card_btn_group pt-3 px-1">
            <EditBtn />
            <DeleteBtn />
        </div>
    )
};

export default ColorPaletteCardFooter;