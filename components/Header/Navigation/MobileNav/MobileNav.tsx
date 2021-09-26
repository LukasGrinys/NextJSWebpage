import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { ICONS } from 'constants/icons';
import NavigationList from '../NavigationList';

import styles from './MobileNav.module.scss';


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iconSrc = isOpen ? ICONS.close : ICONS.bars;
    const router = useRouter();

    useEffect( () => {
        const handleRouteChange = () => {
            setIsOpen(false);
        }
    
        router.events.on('routeChangeStart', handleRouteChange)
    
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, []);

    const toggleNav = () => {
        setIsOpen( prevState => !prevState );
    }

    return (
        <div>
            <button
                onClick={toggleNav} 
                className={styles.navButton}
                style={{
                    opacity: isOpen ? '0.3' : '0.9',
                    transform: isOpen ? 'rotateZ(180deg)' : ''
                }}
            >
                <img src={iconSrc} alt="toggle"/>
            </button>
            {
                isOpen && (
                    <nav className={styles.navigation}>
                        <NavigationList/>
                    </nav>
                )
            }
        </div>
    );
};

export default MobileNav;