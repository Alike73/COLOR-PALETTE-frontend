import React from 'react';
import Swal from 'sweetalert2'
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBtn = ({ deleteProject }) => {

    const handleDeletePalette = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProject();
                Swal.fire({
                title: "Deleted!",
                text: "Color palette has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1700
                });
            }
        });
    }

    return (
        <button 
            type="button" 
            className="btn btn-sm btn-outline-danger"
            onClick = { handleDeletePalette }
            >
            <FaRegTrashAlt className='me-2 fs-5' /> 
            delete
        </button>
    )
};

export default DeleteBtn;