import React from 'react';
import Image from 'next/image';
import { IMAGES } from 'constants/images';
import sectionCardStyles from '../SectionCard/SectionCard.module.scss';
import styles from './PartnersCard.module.scss';

const PartnersCard = () => {
    return (
        <section className={`${sectionCardStyles.sectionCard} ${styles.partnersCard}`} >
            <h1>Our partners</h1>
            <ul className={styles.partnersSection}>
                <li>
                    <Image 
                        src={IMAGES.partnersLogo} 
                        alt="logo"
                        width={180}
                        height={180}
                    />
                    <h2>Partner 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </li>
                <li>
                    <Image 
                        src={IMAGES.partnersLogo} 
                        alt="logo"
                        width={180}
                        height={180}
                    />
                    <h2>Partner 2</h2>
                    <p>Ut blandit, dui in fermentum hendrerit, risus tellus bibendum eros, at ullamcorper risus eros et sapien.</p>
                </li>
                <li>
                    <Image 
                        src={IMAGES.partnersLogo} 
                        alt="logo"
                        width={180}
                        height={180}
                    />
                    <h2>Partner 3</h2>
                    <p>Suspendisse feugiat turpis in ligula finibus fringilla.</p>
                </li>
            </ul>
        </section>           
    );
};

export default PartnersCard;