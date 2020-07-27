import React from 'react';
import styles from './Contact.scss';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import PropTypes from 'prop-types';
import {settings} from '../../../data/dataStore';

const Contact = ({contact}) => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='Contact' />
      <p>{contact.location}</p>
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