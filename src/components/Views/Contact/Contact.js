import React from 'react';
import styles from './Contact.scss';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import Icon from '../../Common/Icon/Icon';
import PropTypes from 'prop-types';
import {settings} from '../../../data/dataStore';
import {ReactTitle} from 'react-meta-tags';

const Contact = ({contact}) => (
  <div className={styles.component}>
    <ReactTitle title='Contact | Robert Androsz | Get in touch'/>
    <Container>
      <PageTitle title='Contact' />
      <div className={styles.grid}>
        <div className={styles.col}>
          <span className={styles.label}>location</span>
          <p>{contact.location}</p>
        </div>
        <div className={styles.col}>
          <span className={styles.label}>email</span>
          <p>{contact.email}</p>
        </div>
        <div className={styles.col}>
          <span className={styles.label}>phone</span>
          <p>{contact.phone}</p>
        </div>
        <div className={styles.col}>
          <span className={styles.label}>more</span>
          <div className={styles.socialIcons}>
            <a href={contact.linkedin}><Icon name='fab fa-linkedin' /></a>
            <a href={contact.github}><Icon name='fab fa-github' /></a>
          </div>
        </div>
      </div>
    </Container>
    <div className={styles.wave}>
      <img className={styles.image} src={settings.contactImage} alt='Palm Image Contact Page'></img>
    </div>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.object,

};

export default Contact;