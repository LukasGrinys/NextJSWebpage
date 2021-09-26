import React from 'react';

import ContactsList from 'components/ContactsList';
import ContentWrapper from 'components/PageElements/ContentWrapper';
import PageHeader from 'components/PageElements/PageHeader';
import { IMAGES } from 'constants/images';

const Contact = () => {
    return (
        <main>
            <PageHeader
                title={'Contact'}
                imgSrc={IMAGES.headers.contact}
            />
            <ContentWrapper theme={'dark'}>
                <h2>Get in touch</h2>
                <ContactsList/>
            </ContentWrapper>
        </main>
    );
};

export default Contact;