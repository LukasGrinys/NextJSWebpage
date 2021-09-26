import React from 'react';

import sectionCardStyles from '../SectionCard/SectionCard.module.scss';
import styles from './ContactsCard.module.scss';

const contactImage = '/media/home/contact.svg';
const phoneIcon = '/icons/phone.png';
const mailIcon = '/icons/mail.png';
const locationIcon = '/icons/location.png';

const ContactsCard = () => {
    return (
        <div className={sectionCardStyles.sectionCard} style={{
            backgroundColor: '#0a001a',
            color: '#f2f2f2'
        }}>
            <div className={sectionCardStyles.graphicBox}>
                {/* <Illustration className={styles.illustration}/> */}
                <img src={contactImage} alt="Contact"/>
            </div>
            <div className={sectionCardStyles.sectionInfo}>
                <h1>Contact us</h1>
                <ul className={styles.contactInfo}>
                    <li><img src={phoneIcon} alt="Phone"/>Phone: +00 (000)000</li>
                    <li><img src={mailIcon} alt="E-mail"/>Email: mail@mail.com</li>
                    <li><img src={locationIcon} alt="Address"/>Location: Town, Street st. 1</li>
                </ul>
            </div>
        </div>
    );
};

export default ContactsCard;