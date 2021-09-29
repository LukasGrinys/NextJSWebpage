import React from 'react';

import PageHeader from 'components/PageElements/PageHeader';
import ContentWrapper from 'components/PageElements/ContentWrapper';
import Plans from 'components/Plans';
import Title from 'components/PageElements/Title';

const headerImg = '/media/headers/service.jpg';

const Service = () => {
    return (
        <main>
            <Title subtitle={'Service'}/>
            <PageHeader
                title={'Service'}
                imgSrc={headerImg}
            />
            <ContentWrapper>
                <p>
                    Etiam pharetra mauris sed viverra hendrerit. Proin bibendum egestas 
                    orci non molestie. Donec id blandit tellus, quis bibendum sem. 
                    Praesent pharetra ultrices orci, ultrices venenatis sem 
                    pellentesque et.
                </p>
                <h2>Offers</h2>
                <Plans/>
                <p>
                    Duis eget ligula non risus aliquam vehicula. 
                    Interdum et malesuada fames ac ante ipsum primis 
                    in faucibus. Integer interdum sit amet urna eu 
                    congue. 
                </p>
                <hr/>
                <p>
                    Pellentesque posuere, purus sed faucibus 
                    tempus, nibh nisi interdum lorem, ac pharetra arcu
                    velit quis est. Duis iaculis tellus non rhoncus 
                    aliquet.
                </p>
            </ContentWrapper>
        </main>
    );
};

export default Service;