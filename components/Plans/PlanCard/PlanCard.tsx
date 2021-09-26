import React, { FunctionComponent } from 'react';

import styles from './PlanCard.module.scss';

interface IPlanCardProps {
    title: string;
    price: number;
    featuresToOffer: number;
}

const featuresList = [
    'Feature A',
    'Feature B',
    'Feature C',
    'Feature D',
    'Feature E'
];

const PlanCard:FunctionComponent<IPlanCardProps> = ({
    title,
    price,
    featuresToOffer
}) => {
    const renderFeatureList = (featuresToOffer:number):JSX.Element => (
        <ul className={styles.featureList}>
            {
                featuresList.map( 
                    (feature, index) => (
                        <li 
                            key={`${title}-${index}`}
                            className={`${styles.feature} ${index >= featuresToOffer ? styles.disabled : ''}`}
                        >
                            {feature}
                        </li>
                    )
                )
            }
        </ul>
    )

    return (
        <article className={styles.planItem}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.price}>
                <span>$</span>
                <span>{price}</span>
                <span>/year</span>
            </div>
            {renderFeatureList(featuresToOffer)}
            <button className={styles.btn}>
                Get started
            </button>
        </article>
    );
};

export default PlanCard;