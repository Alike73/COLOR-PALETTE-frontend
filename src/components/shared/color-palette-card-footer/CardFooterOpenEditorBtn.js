import { useDispatch, useSelector } from 'react-redux';
import { getActiveOpenEditorBtn, setIsActiveOpenBtn } from '../../../utils/redux/EditorSlice';
import Swal from 'sweetalert2';
import { TbEdit } from "react-icons/tb";
import { TbEditOff } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { getMyPermission } from '../../../api/PermissionGrud';

const CardFooterOpenEditorBtn = () => {

    const [permission, setPermission] = useState([]);
    const isActiveOpenBtn = useSelector(getActiveOpenEditorBtn);
    const dispatch = useDispatch();

    useEffect(() => {
        getMyPermission(setPermission)
    }, []);

    const myAdminName = permission[0]?.adminName;
    const myAdminPass = permission[0]?.password;

    const handleOpenEditor = async () => {
        if (isActiveOpenBtn) {
            Swal.fire({
                title: "Hi Alec! You are already admin! 👋",
                color: "#97BE5A",
            });
        }else {
            const { value: adminName } = await Swal.fire({
                title: "Enter your Admin name",
                input: "text",
                inputLabel: "😃",
                inputPlaceholder: "Enter your admin name",
                inputAttributes: {
                maxlength: "15",
                autocapitalize: "off",
                autocorrect: "off"
                }
            });
    
            const { value: password } = await Swal.fire({
                title: "Enter your Password",
                input: "password",
                inputLabel: "😁",
                inputPlaceholder: "Enter your password",
                inputAttributes: {
                maxlength: "15",
                autocapitalize: "off",
                autocorrect: "off"
                }
            });
            if (adminName === myAdminName && password === myAdminPass) {
                dispatch(setIsActiveOpenBtn(true));
                Swal.fire(`Welcome Alec! 😍`);
            }else if (adminName !== myAdminName && password === myAdminPass) {
                Swal.fire({
                    title: "Wrong Admin name!",
                    text: 'Try again. 🥺',
                    width: 600,
                    padding: "3em",
                    color: "#EE4E4E",
                    confirmButtonColor: "#d33",
                });
            }else if (adminName === myAdminName && password !== myAdminPass) {
                Swal.fire({
                    title: "Wrong Password! 😟",
                    text: 'Try again.',
                    width: 600,
                    padding: "3em",
                    color: "#EE4E4E",
                    confirmButtonColor: "#d33",
                });
            }else {
                Swal.fire({
                    title: "Wrong Admin name and Password! 😭",
                    text: 'Try again.',
                    width: 600,
                    padding: "3em",
                    color: "#EE4E4E",
                    confirmButtonColor: "#d33",
                });
            }
        }
        
    };

    const handleCloseEditor = () => {
        dispatch(setIsActiveOpenBtn(false));
    };

    return (
        <button 
            type="button" 
            className={ `btn btn-sm me-3 ${ isActiveOpenBtn ? "btn-outline-primary" : "btn-outline-danger" }` } 
            onClick = { isActiveOpenBtn ? handleCloseEditor : handleOpenEditor }
            >
            { isActiveOpenBtn 
                ? (<TbEditOff className='fs-5' />) 
                : (<TbEdit className='fs-5' />)
            }
        </button>
    )
};

export default CardFooterOpenEditorBtn;