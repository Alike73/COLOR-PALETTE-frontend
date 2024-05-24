import { useDispatch, useSelector } from 'react-redux';
import { getActiveOpenEditorBtn, setIsActiveOpenBtn } from '../../../utils/redux/EditorSlice';
import Swal from 'sweetalert2';
import { TbEdit } from "react-icons/tb";
import { TbEditOff } from "react-icons/tb";

const CardFooterOpenEditorBtn = () => {

    const isActiveOpenBtn = useSelector(getActiveOpenEditorBtn);
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