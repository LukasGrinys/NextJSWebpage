import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
           <Logo/> 
           <Navigation/>
        </header>
    );
};

export default Header;