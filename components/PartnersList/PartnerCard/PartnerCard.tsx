import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './PartnerCard.module.scss';

interface IPartnerCardProps {
    name: string;
    imageSrc: string;
}

const PartnerCard:FunctionComponent<React.PropsWithChildren<IPartnerCardProps>> = ({
    name,
    imageSrc,
    children
}) => {
    return (
        <article className={styles.partnerCard}>
            <section className={styles.left}>
                <Image 
                    src={imageSrc}
                    alt="logo" 
                    className={styles.logo}
                    width={220}
                    height={220}
                />
                <h3 className={styles.name}>{name}</h3>
            </section>
            <section className={styles.right}>
                <p>{children}</p>
            </section>
        </article>
    );
};

export default PartnerCard;