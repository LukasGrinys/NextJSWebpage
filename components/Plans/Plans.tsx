import React, { FunctionComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { PLANS_LIST } from 'data/plansList';

import PlanCard from './PlanCard';

const Plans:FunctionComponent = () => (
    <ScrollAnimation 
        animateIn={"fadeInUp"}
        duration={1.5} 
        animateOnce={true}
    >
        <section style={{textAlign: 'center'}}>
            {
                PLANS_LIST.map( (planItem, index) => (
                    <PlanCard key={`${planItem.title}-${index}`} {...planItem} />
                ))
            }
        </section>
    </ScrollAnimation>
);

export default Plans;