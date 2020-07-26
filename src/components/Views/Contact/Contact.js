import React from 'react';
import styles from './Contact.scss';
import Container from '../../Layout/Container/Container';
import PropTypes from 'prop-types';

const Contact = ({contact}) => (
  <div className={styles.component}>
    <Container>
      <p>{contact.location}</p>
    </Container>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.object,

};

export default Contact;