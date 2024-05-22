import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import SearchInput from '../../shared/search-input/SearchInput';
import { setIsActiveOpenBtn } from '../../../utils/redux/EditorSlice';

const Header = () => {

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
    }
    

    return (
        <header className="py-3 mb-3 border-bottom my-header">
            <div className="container">
                <SearchInput handleOpenEditor = { handleOpenEditor } />
            </div>
        </header>
    )
};

export default Header;