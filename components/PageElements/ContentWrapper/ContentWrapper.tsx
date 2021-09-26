import React, { FunctionComponent } from 'react';

import styles from './ContentWrapper.module.scss';

interface IContentWrapperProps {
    children: JSX.Element | JSX.Element[] | string;
    theme?: 'default' | 'dark';
}

const ContentWrapper:FunctionComponent<IContentWrapperProps> = ({theme, children}) => {
    return (
        <div className={`${styles.contentWrapper} ${theme === 'dark' ? styles.dark : ''}`}>
            {children}
        </div>
    );
};

export default ContentWrapper;