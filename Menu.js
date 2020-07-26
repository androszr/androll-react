import React from 'react';
import styles from './Menu.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import MenuList from '../MenuList/MenuListContainer';


class Menu extends React.Component {

  static propTypes = {
    data: PropTypes.array,
  }
  
  render() {

    const {data} = this.props;
    return(
      <nav className={styles.component}>
        <Icon name='bars'/>
        {data.map( list => (
          <MenuList key={list.id} {...list} />
        ))}
      </nav>
    );
  }
}

export default Menu;