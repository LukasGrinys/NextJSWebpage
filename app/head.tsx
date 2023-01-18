import React, { FunctionComponent } from 'react';

import { SETTINGS } from 'constants/settings';

const Head:FunctionComponent = () => {
    return (
        <head>
            <title>{SETTINGS.pageTitle}</title>
            <link href="https://fonts.googleapis.com/css?family=Alata|Righteous&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,500&display=swap" rel="stylesheet"/>
        </head>
    );
};

export default Head;