import {connect} from 'react-redux';
import TimelineColumn from './TimelineColumn';

const mapStateToProps = (state, props) => {
  const position = props.position;
  const preview = props.preview;
  const filteredPositions = state.app.experience.filter(experience => experience.position == position);
  const positionDetails = filteredPositions[0] || {};
  return {
    ...positionDetails,
    preview,
  };
};


export default connect(mapStateToProps)(TimelineColumn);