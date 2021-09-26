import React from 'react';
import Link from 'next/link';

const NavigationList = () => (
    <ul>
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
        <li>
            <Link href='/about'>
                About
            </Link>
        </li>
        <li>
            <Link href='/service'>
                Service
            </Link>
        </li>
        <li>
            <Link href='/partners'>
                Partners
            </Link>
        </li>
        <li>
            <Link href='/contact'>
                Contact
            </Link>
        </li>
    </ul>
);

export default NavigationList;