import React from 'react';
import { GiPalette } from "react-icons/gi";

const EditorForm = ({ handleSubmit, editing, title, setTitle, 
    category, setCategory, color_1, setColor_1, color_2, 
    setColor_2, color_3, setColor_3, color_4, setColor_4 }) => {

    const btnText = editing ? "Save changes" : "Add Palette";

    const colorOne = {
        background: color_1,
        width: '30px',
        borderTopRightRadius: '.35rem',
        borderBottomRightRadius: '.35rem',
        transition: 'all 250ms ease-in-out'
    };
    const colorTwo = {
        background: color_2,
        width: '30px',
        borderTopLeftRadius: '.35rem',
        borderBottomLeftRadius: '.35rem',
        transition: 'all 250ms ease-in-out'
    };
    const colorThree = {
        background: color_3,
        width: '30px',
        borderTopRightRadius: '.35rem',
        borderBottomRightRadius: '.35rem',
        transition: 'all 250ms ease-in-out'  
    };
    const colorFour = {
        background: color_4,
        width: '30px',
        borderTopLeftRadius: '.35rem',
        borderBottomLeftRadius: '.35rem',
        transition: 'all 250ms ease-in-out' 
    };

    return (
        <form id='editor-form' onSubmit = { handleSubmit }>
            <p className='text-center text-primary lead mb-1'>
                Title and Category should consist no more than 
                <span className='text-danger fs-4 fw-bold mx-2'>
                    14
                </span>
                characters
            </p>
            <div className="input-group mb-3">
                <input 
                id='palette-title' 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Palette title" 
                aria-label="Palette title"
                value = { title }
                required = { true }
                onChange = { (e) => setTitle(e.target.value) }
                />
                <span className="input-group-text"><GiPalette className='fs-3' /></span>
                <input 
                id='category' 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Category" 
                aria-label="Category" 
                value = { category }
                required = { true }
                onChange = { (e) => setCategory(e.target.value) }
                />
            </div>
            { !editing && <p className='text-center text-danger lead mb-1'>
                Color type as a hexadecimal <span className='text-primary fw-bold'>#000000</span> 
            </p>}
            
            <div className="input-group mb-3">
                <input 
                id='color-1' 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Color one" 
                aria-label="Color one" 
                value = { color_1 }
                required = { true }
                onChange = { (e) => setColor_1(e.target.value) }
                />
                <span className="me-1" style = { colorOne }></span>
                <span className="ms-1" style = { colorTwo }></span>
                <input 
                id='color-2' 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Color two" 
                aria-label="Color two" 
                value = { color_2 }
                required = { true }
                onChange = { (e) => setColor_2(e.target.value) }
                />
            </div>
            <div className="input-group mb-3">
                <input 
                id='color-3' 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Color three" 
                aria-label="Color three" 
                value = { color_3 }
                required = { true }
                onChange = { (e) => setColor_3(e.target.value) }
                />
                <span className="me-1" style = { colorThree }></span>
                <span className="ms-1" style = { colorFour }></span>
                <input 
                id='color-4' 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Color four" 
                aria-label="Color four" 
                value = { color_4 }
                required = { true }
                onChange = { (e) => setColor_4(e.target.value) }
                />
            </div>
            <div className='d-flex justify-content-end'>
                <button type="submit" className="btn btn-primary editor_submit_btn">
                    { btnText }
                </button>
            </div>
        </form>
    )
};

export default EditorForm;