import React from 'react';
import styles from './SkillCard.scss';
import PropTypes from 'prop-types';
import Divider from '../../Common/Divider/Divider';
import Icon from '../../Common/Icon/Icon';


const SkillCard = ({type}) => (
  <div className={styles.component}>
    <div className={styles.cardHeading}>
      <h5>{type.name}</h5>
    </div>
    <div className={styles.cardImage}>
      <img className={styles.image} src={type.image} alt=''></img>
    </div>
    <Divider />
    <div className={styles.cardSection}>
      <p className={styles.textHeading}>{type.duration} experience</p>
      <p className={styles.iconStyle}><Icon name={type.icon}/></p>
    </div> 
    <Divider />
    <div className={styles.cardSection}>
      <p className={styles.tags}>
        {type.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </p>
    </div>
  </div>
);

SkillCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.object,
};

export default SkillCard;