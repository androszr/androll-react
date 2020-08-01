import React from 'react';
import styles from './SkillCard.scss';
import PropTypes from 'prop-types';


const SkillCard = ({type}) => (
  <div className={styles.component}>
    <p>{type.name}</p>
  </div>
);

SkillCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.object,
};

export default SkillCard;