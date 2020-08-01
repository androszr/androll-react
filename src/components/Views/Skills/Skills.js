import React from 'react';
import Container from '../../Layout/Container/Container';
import PageTitle from '../../Common/PageTitle/PageTitle';
import PropTypes from 'prop-types';
import SkillCard from '../../Features/SkillCard/SkillCard';
import styles from './Skills.scss';

const Skills = ({skills}) => (
  <div className={styles.component}>
    <Container>
      <PageTitle title='Skills' />
      <div className={styles.grid}>
        {skills.map(skill => (
          <SkillCard key={skill.id} type={skill} />
        ))}
      </div>
    </Container>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.array,
};

export default Skills;