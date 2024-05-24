import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const ScrollBtn = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <FaPlus 
                        className="icon-position2 icon-style" 
                        onClick={scrollToBottom} 
                        data-bs-toggle="modal" 
                        data-bs-target="#editor"
                    />
                )}{" "}
            </div>

            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <FaChevronUp className="icon-position icon-style" onClick={goToTop} />
                )}{" "}
            </div>
        </div>
    )
};

export default ScrollBtn;