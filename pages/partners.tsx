import React from 'react';

import ContentWrapper from 'components/PageElements/ContentWrapper';
import PageHeader from 'components/PageElements/PageHeader';
import PartnersList from 'components/PartnersList';
import Title from 'components/PageElements/Title';

const headerImg = '/media/headers/partners.jpeg';

const Partners = () => {
    return (
        <main>
            <Title subtitle={'Partners'}/>
            <PageHeader title={"Partners"} imgSrc={headerImg}/>
            <ContentWrapper>
                <h2>Hear from our partners</h2>
                <PartnersList/>
            </ContentWrapper>
        </main>
    );
};

export default Partners;