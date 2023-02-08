import React, { FunctionComponent } from 'react';

import { SETTINGS } from 'constants/settings';

const Head:FunctionComponent = () => {
    return (
        <head>
            <title>{SETTINGS.pageTitle}</title>
        </head>
    );
};

export default Head;