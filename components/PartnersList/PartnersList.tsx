import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { PARTNERS_LIST } from 'data/partnersList';

import PartnerCard from './PartnerCard';

const PartnersList = () => {
    return (
        <section>
           {
                PARTNERS_LIST.map( (partnerItem, index) => (
                    <ScrollAnimation
                        animateIn={"fadeInLeft"}
                        duration={1.2} 
                        animateOnce={true}
                        key={`${partnerItem.id}-${index}`}
                    >
                        <PartnerCard
                            name={partnerItem.name}
                            imageSrc={partnerItem.imageSrc}
                        >
                            {partnerItem.text}
                        </PartnerCard>
                    </ScrollAnimation>  
                ))
           }
        </section>
    );
};

export default PartnersList;