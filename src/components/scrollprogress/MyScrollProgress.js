import React, { useEffect, useState } from 'react';

const MyScrollProgress = () => {

    const [scrollProgress, setScrollProgress] = useState(0);

    // Function to calculate scroll progress
    const calculateScrollProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const totalScroll = docHeight - winHeight;

        // Prevent division by zero
        if (totalScroll === 0) {
            setScrollProgress(0);
        } else {
            const scrollPercent = (scrollTop / totalScroll) * 100;
            setScrollProgress(scrollPercent);
        }
    };

    // Adding event listener on component mount and cleanup on unmount
    useEffect(() => {
        window.addEventListener('scroll', calculateScrollProgress);
        calculateScrollProgress(); // Initial call to set the correct value
        return () => {
            window.removeEventListener('scroll', calculateScrollProgress);
        };
    }, []);

    return (
        <progress
            className="scroll_progress"
            max="100"
            value={isNaN(scrollProgress) ? 0 : scrollProgress}
        ></progress>
    )
};

export default MyScrollProgress;