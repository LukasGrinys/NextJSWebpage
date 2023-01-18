"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'

import { ICONS } from 'constants/icons';
import NavigationList from '../NavigationList';

import styles from './MobileNav.module.scss';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iconSrc = isOpen ? ICONS.close : ICONS.bars;
    const pathname = usePathname();

    useEffect( () => {
        setIsOpen(false);
    }, [pathname]);

    const toggleNav = () => {
        setIsOpen( prevState => !prevState );
    }

    return (
        <div>
            <button
                onClick={toggleNav}
                className={`${styles.navButton} ${isOpen ? styles.isOpen : ''}`}
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