import React, { useEffect, useState } from 'react';
import './scrollup.css';

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return showScroll ? (
        <div className="scrollup" onClick={scrollTop}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </div>
    ) : null;
};

export default ScrollUp;
