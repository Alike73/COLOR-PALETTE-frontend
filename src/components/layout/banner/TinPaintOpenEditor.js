import React from 'react';
import tin_paint from '../../../assets/images/colors-tin1.png'

const TinPaintOpenEditor = ({ setEditing, setTitle, setCategory, setColor_1, setColor_2, setColor_3, setColor_4 }) => {

    const handleEditorFields = () => {
        setEditing(false)
        setTitle('')
        setCategory('')
        setColor_1('')
        setColor_2('')
        setColor_3('')
        setColor_4('')
    };
    
    return (
        <img 
            src={ tin_paint } 
            className="d-block mx-lg-auto img-fluid tin_paint" 
            alt="Bootstrap Themes" 
            width="150" 
            loading="lazy"
            data-bs-toggle="modal" 
            data-bs-target="#editor"
            onClick = { handleEditorFields }
        />
    )
};

export default TinPaintOpenEditor;