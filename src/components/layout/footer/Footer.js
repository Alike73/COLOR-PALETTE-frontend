import React, { useEffect, useState } from 'react';
import myAvatar from '../../../assets/images/Alec-3D-avatar.png';

const Footer = () => {

    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="d-flex justify-content-center align-items-center py-3 my-4">
            <p className="text-center text-primary m-0">
            © { year } Alec dev 
            </p>
            <a href="https://github.com/Alike73" target='_blank' rel='noreferrer'>
                <img className='ms-3' src={ myAvatar } alt="Avatar" />
            </a>
        </footer>
    )
};

export default Footer;