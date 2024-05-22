import React from 'react';
import Swal from 'sweetalert2';
import tin_paint from '../../../assets/images/colors-tin.png'
import { useDispatch } from 'react-redux';
import { setIsActiveOpenBtn } from '../../../utils/redux/EditorSlice';

const TinPaint = () => {

    const dispatch = useDispatch();
    const myAdminName = 'Alec';
    const myAdminPass = 'K@ch@pon2011';

    const handleOpenEditor = async () => {
        const { value: password } = await Swal.fire({
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
            maxlength: "15",
            autocapitalize: "off",
            autocorrect: "off"
            }
        });
        const { value: adminName } = await Swal.fire({
            title: "Enter your admin name",
            input: "text",
            inputLabel: "Text",
            inputPlaceholder: "Enter your admin name",
            inputAttributes: {
            maxlength: "15",
            autocapitalize: "off",
            autocorrect: "off"
            }
        });
        if (password === myAdminPass && adminName === myAdminName) {
            dispatch(setIsActiveOpenBtn(true));
            Swal.fire(`Welcome Alec!`);
        }else {
            Swal.fire({
                title: "Wrong admin name and password!",
                width: 600,
                padding: "3em",
                color: "#EE4E4E",
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <img 
            src={ tin_paint } 
            className="d-block mx-lg-auto img-fluid tin_paint" 
            alt="Bootstrap Themes" 
            width="150" 
            loading="lazy"
            onClick = { handleOpenEditor } 
        />
    )
};

export default TinPaint;