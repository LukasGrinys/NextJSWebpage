import 'styles/index.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import { fontVariables } from 'constants/fonts';

const Layout = ({children}) => {
    return (
        <html className={fontVariables}>
            <head/>
            <body>
                <Header/>
                {children}
                <ScrollToTop/>
                <Footer/>
            </body>
        </html>
    )
}

export default Layout;