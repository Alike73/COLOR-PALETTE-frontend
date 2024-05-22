import React from 'react';
import { FaEdit } from "react-icons/fa";

const EditBtn = () => {

    return (
        <button 
            type="button" 
            className="btn btn-sm btn-outline-success me-3"
            data-bs-toggle="modal" 
            data-bs-target="#editor"
            >
            <FaEdit className='me-2' /> 
            Edit
        </button>
    )
};

export default EditBtn;