import React from 'react';
import Swal from 'sweetalert2'
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBtn = () => {

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
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
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
            <FaRegTrashAlt /> 
            delete
        </button>
    )
};

export default DeleteBtn;