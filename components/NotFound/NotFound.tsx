import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import searchImage from './search.svg';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <Image src={searchImage} width={300} height={300} alt={'Not found'}/>
            <section>
                <div>404</div>
                <div>Page you are looking for was not found</div>
            </section>
            <Link href={'/'}>Go back</Link>
        </div>
    );
};

export default NotFound;