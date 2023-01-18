import React, { FunctionComponent } from 'react';

import { PLANS_LIST } from 'data/plansList';

import PlanCard from './PlanCard';

const Plans:FunctionComponent = () => (
    <section style={{textAlign: 'center'}}>
        {
            PLANS_LIST.map( (planItem, index) => (
                <PlanCard key={`${planItem.title}-${index}`} {...planItem} />
            ))
        }
    </section>
);

export default Plans;