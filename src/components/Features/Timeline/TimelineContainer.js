import {connect} from 'react-redux';
import Timeline from './Timeline';

const mapStateToProps = state => ({
  timeline: state.app.experience,
  
});


export default connect(mapStateToProps)(Timeline);