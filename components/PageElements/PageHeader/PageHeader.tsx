import React, { FunctionComponent } from 'react';
import styles from './PageHeader.module.scss';

interface IPageHeaderProps {
    title: string;
    imgSrc: string;
}

const PageHeader:FunctionComponent<IPageHeaderProps> = ({
    title,
    imgSrc
}) => {
    return (
        <header 
            className={styles.pageHeader}
            style={{
                background: `url(${imgSrc})`,
                objectFit: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* TODO: Handle image load */}
            <h1>{title}</h1>
        </header>
    );
};

export default PageHeader;