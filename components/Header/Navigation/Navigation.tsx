import React, { Fragment } from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigation = () => {
    return (
        <Fragment>
            <MobileNav/>
            <DesktopNav/>
        </Fragment>
    );
};

export default Navigation;