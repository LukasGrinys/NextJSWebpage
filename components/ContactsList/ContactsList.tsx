import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { CONTACTS_LIST } from 'data/contactsList';

import ContactBox from './ContactBox';
import styles from './ContactsList.module.scss';

const ContactsList = () => {
    return (
        <section className={styles.contactsList}>
            {
                CONTACTS_LIST.map( (contactItem, index) => {
                    const contactBoxProps = {
                        ...contactItem,
                    };
                    delete contactBoxProps.id;

                    const animationDelay = index * 200;

                    return (
                        <ScrollAnimation
                            delay={animationDelay}
                            animateIn={'fadeInLeft'} 
                            animateOnce={true}
                            key={contactItem.id}
                        >
                            <ContactBox {...contactBoxProps}/>
                        </ScrollAnimation>
                    )
                })
            }
        </section>
    );
};

export default ContactsList;