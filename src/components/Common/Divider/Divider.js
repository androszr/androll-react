import React from 'react';
import styles from './Divider.scss';

const Divider = () => (
  <div className={styles.component}>
    <div className={styles.dividerLeft + ' ' + styles.dividerHole}>
    </div>
    <div  className={styles.innerDivider}>
    </div>
    <div className={styles.dividerRight + ' ' + styles.dividerHole}>
    </div>
  </div>
);



export default Divider;
