import React from 'react';
import styles from './TimelineColumn.scss';
import PropTypes from 'prop-types';
import Icon from '../../Common/Icon/Icon';

class TimelineColumn extends React.Component {
  static propTypes = {
    dates: PropTypes.string,
    position: PropTypes.string,
    descOne: PropTypes.string,
    descTwo: PropTypes.string,
    preview: PropTypes.string,
  };
  state = {
    visible: this.props.preview || '',
  };

  previewToggle = () => {
    let targetState = 'hidden';
    if (this.state.visible=='hidden') {
      targetState = '';
    } 
    this.setState({
      visible: targetState,
    });

  }

  

  render() {

    const {dates, position, descOne, descTwo} = this.props;
    return (
      <div className={styles.component}>
        <span className={styles.dates}>{dates}</span>
        <p className={styles.company} data-target="freelance-description" onClick={this.previewToggle}>{position} {this.state.visible=='hidden' ? <Icon name='fal fa-chevron-up'/> : <Icon name='fal fa-chevron-down'/>}</p>
        <div className={styles.roleDetails}>
          <ul className={styles.description} style={this.state.visible=='hidden' ? {opacity:0, marginBottom: '-400px'} : {}}>
            <li>{descOne}</li>
            <li>{descTwo}</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default TimelineColumn;