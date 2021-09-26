import React from 'react';
import NavigationList from '../NavigationList';
import styles from './DesktopNav.module.scss';

const DesktopNav = () => {
    return (
        <nav className={styles.navigation}>
            <NavigationList/>
        </nav>
    );
};

export default DesktopNav;