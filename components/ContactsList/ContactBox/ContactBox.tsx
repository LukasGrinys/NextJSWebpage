import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { ICONS } from 'constants/icons';

import styles from './ContactBox.module.scss';

interface IContactBoxProps {
    name: string;
    position: string;
    mail: string;
    phone: string;
    imageSrc: string;
}

const iconSize = 12; // px

const ContactBox:FunctionComponent<IContactBoxProps> = ({
    name,
    position,
    mail,
    phone,
    imageSrc
}) => {
    return (
        <article className={styles.contactBox}>
            <Image
                className={styles.contactImage} 
                src={imageSrc}
                alt={name}
                height={250}
                width={250}
            />
            <section className={styles.details}>
                <h3>{name}</h3>
                <p>{position}</p>
                <ul>
                    <li>
                        <Image 
                            height={iconSize}
                            width={iconSize} 
                            src={ICONS.phone} 
                            className={styles.icon}
                        />
                        {phone}
                    </li>
                    <li>
                        <Image 
                            height={iconSize}
                            width={iconSize} 
                            src={ICONS.mail} 
                            className={styles.icon}
                        />
                        {mail}
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default ContactBox;