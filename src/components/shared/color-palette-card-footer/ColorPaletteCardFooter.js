import React from 'react';
import EditBtn from '../buttons/EditBtn';
import DeleteBtn from '../buttons/DeleteBtn';
import CardFooterOpenEditorBtn from './CardFooterOpenEditorBtn';
import { useSelector } from 'react-redux';
import { getActiveOpenEditorBtn } from '../../../utils/redux/EditorSlice';

const ColorPaletteCardFooter = ({ updatingInInput, deleteProject}) => {

    const isActiveOpenBtn = useSelector(getActiveOpenEditorBtn);

    return (
        <div className="card_btn_group pt-3 px-1">
            <CardFooterOpenEditorBtn />
            { isActiveOpenBtn && 
                <>
                    <EditBtn updatingInInput = { updatingInInput } />
                    <DeleteBtn deleteProject = { deleteProject } />
                </>
            }
        </div>
    )
};

export default ColorPaletteCardFooter;