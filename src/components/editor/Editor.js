import React from 'react';
import EditorForm from './EditorForm';
import { CgCloseO } from "react-icons/cg";

const Editor = ({ handleSubmit, editing, title, setTitle, 
    category, setCategory, color_1, setColor_1, color_2, 
    setColor_2, color_3, setColor_3, color_4, setColor_4 }) => {

        const headerText = editing ? `Editing the ${title} Palette` : 'Adding a new Palette';

    return (
        <div className="modal fade" id="editor" tabIndex="-1" aria-labelledby="editorLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title text-primary fw-bolder fs-5" id="editorLabel">{ headerText }</h2>
                        <CgCloseO className="ms-auto fs-3 text-danger modal-close-btn" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <EditorForm 
                            handleSubmit = { handleSubmit } 
                            editing = { editing }
                            title = { title }
                            setTitle = { setTitle }
                            category = { category }
                            setCategory = { setCategory }
                            color_1 = { color_1 }
                            setColor_1 = { setColor_1 }
                            color_2 = { color_2 }
                            setColor_2 = { setColor_2 }
                            color_3 = { color_3 }
                            setColor_3 = { setColor_3 }
                            color_4 = { color_4 }
                            setColor_4 = { setColor_4 }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editor;