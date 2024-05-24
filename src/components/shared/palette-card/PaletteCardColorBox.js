import React, { useState } from 'react';
import CopyBtn from '../buttons/CopyBtn';
import CopyBtnTwo from '../buttons/CopyBtnTwo';
import { FaCheck } from "react-icons/fa";

const PaletteCardColorBox = ({ color_bg, onHover, onLeave }) => {

    const [isCopied, setIsCopied] = useState(false);

    const colorBoxBackground = {
        background: color_bg 
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(color_bg)
        .then(() => {
            // alert(`Color ${color_bg} copied to clipboard!`);
            // You can replace this alert with any other feedback mechanism.
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500)
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div 
            className="col color-box"
            onMouseEnter = { () => onHover(color_bg) } 
            onMouseLeave = { onLeave }
        >
            <div 
                className="color-place" 
                style = { colorBoxBackground } 
                onClick = { handleCopy }
            >
                <small className={ `copied-text ${ isCopied ? "active" : "" }` }>
                    <FaCheck /> 
                    Copied!
                </small>
                <CopyBtn 
                    handleCopy = { handleCopy } 
                    isCopied = { isCopied } 
                />
                <CopyBtnTwo 
                    color_bg = { color_bg } 
                    handleCopy = { handleCopy } 
                />
            </div>
        </div>
    )
};

export default PaletteCardColorBox;