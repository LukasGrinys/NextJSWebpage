import Head from 'next/head';
import 'styles/index.css';
import Layout from "components/Layout";
import { SETTINGS } from 'constants/settings';

const App = ({Component, pageProps}) => {
    return (
        <Layout>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Alata|Righteous&display=swap" rel="stylesheet"/> 
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,500&display=swap" rel="stylesheet"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet"/>
                <title>{SETTINGS.pageTitle}</title>
            </Head>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default App;