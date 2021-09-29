import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { SETTINGS } from "constants/settings";

interface ITitleProps {
    subtitle?: string;
    mainTitle?: string;
}

const Title:FunctionComponent<ITitleProps> = ({
    subtitle,
    mainTitle
}) => {
    const title = mainTitle || SETTINGS.pageTitle;

    return (
        <Head>
            <title>{title}{subtitle ? ` | ${subtitle}` : ''}</title>
        </Head>
    );
};

export default Title;