import {connect} from 'react-redux';
import Skills from './Skills';

const mapStateToProps = state => ({
  skills: state.app.skills,
  
});


export default connect(mapStateToProps)(Skills);