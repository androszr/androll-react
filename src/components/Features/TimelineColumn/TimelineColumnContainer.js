import {connect} from 'react-redux';
import TimelineColumn from './TimelineColumn';

const mapStateToProps = (state, props) => {
  const position = props.position;
  
  const filteredPositions = state.app.experience.filter(experience => experience.position == position);
  const positionDetails = filteredPositions[0] || {};
  console.log('filtered position:', positionDetails);
  return {
    ...positionDetails,
  };
};


export default connect(mapStateToProps)(TimelineColumn);