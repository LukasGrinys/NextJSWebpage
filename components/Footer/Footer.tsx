import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SOCIAL_LINKS } from 'data/socialLinks';
import { ICONS } from 'constants/icons';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>All rights reserved. 2019-2020</p>
            <ul className={styles.socialIcons}>
                {SOCIAL_LINKS.map( (item, index) => {
                    return (
                        <li key={`${item.id}-${item.title}-${index}`}>
                            <Link href={'/'}>
                                <Image
                                    src={item.imageSrc} 
                                    alt={item.title}
                                    width={35}
                                    height={35}
                                />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </footer>
    );
};

export default Footer;