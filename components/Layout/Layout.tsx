import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from 'components/ScrollToTop';

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <ScrollToTop/>
            <Footer/>
        </div>
    );
};

export default Layout;