import React, { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

import { SETTINGS } from 'constants/settings';

import styles from './ScrollToTop.module.scss';


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect( () => {
        const handleScroll = throttle(100, false, () => {
            if(window.pageYOffset > SETTINGS.showScrollToTopOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    
    const handleClick = () => {
        window.scrollTo(0,0);
    }

    return (
        <button 
            className={`${styles.scrollToTopBtn} ${!isVisible ? styles.hidden : ''}`}
            disabled={!isVisible}
            onClick={handleClick}
        >
            <span>Go to top</span>
        </button>
    );
};

export default ScrollToTop;