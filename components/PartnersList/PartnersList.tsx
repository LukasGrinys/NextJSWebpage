import React from 'react';

import { PARTNERS_LIST } from 'data/partnersList';

import PartnerCard from './PartnerCard';

const PartnersList = () => {
    return (
        <section>
           {
                PARTNERS_LIST.map( (partnerItem, index) => (
                    <PartnerCard
                        key={`${partnerItem.id}-${index}`}
                        name={partnerItem.name}
                        imageSrc={partnerItem.imageSrc}
                    >
                        {partnerItem.text}
                    </PartnerCard> 
                ))
           }
        </section>
    );
};

export default PartnersList;