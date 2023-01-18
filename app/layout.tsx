import 'styles/index.css';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';

const Layout = ({children}) => {
    return (
        <html>
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