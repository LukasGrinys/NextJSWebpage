import React from 'react';

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

                    return (
                        <ContactBox key={contactItem.id} {...contactBoxProps}/>
                    )
                })
            }
        </section>
    );
};

export default ContactsList;