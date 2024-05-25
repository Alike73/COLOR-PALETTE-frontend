import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import SearchInput from '../../shared/search-input/SearchInput';
import { getActiveOpenEditorBtn, setIsActiveOpenBtn } from '../../../utils/redux/EditorSlice';
import { getActiveHeader, setIsActiveHeader } from '../../../utils/redux/HeaderSlice';
import { getMyPermission } from '../../../api/PermissionGrud';

const Header = ({ filteredPalettes }) => {

    const [permission, setPermission] = useState([]);

    const dispatch = useDispatch();
    const isActiveHeader = useSelector(getActiveHeader);
    const isActiveOpenBtn = useSelector(getActiveOpenEditorBtn);

    useEffect(() => {
        getMyPermission(setPermission)
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                dispatch(setIsActiveHeader(true));
            } else {
                dispatch(setIsActiveHeader(false));
            }
        });
    }, [dispatch]);

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
    

    return (
        <header className={ `py-3 mb-3 my-header ${ isActiveHeader ? "active" : "" }` }>
            <div className="container">
                <SearchInput handleOpenEditor = { handleOpenEditor } filteredPalettes = { filteredPalettes } />
            </div>
        </header>
    )
};

export default Header;