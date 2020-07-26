import {connect} from 'react-redux';
import About from './About';

const mapStateToProps = state => ({
  about: state.app.about,
});


export default connect(mapStateToProps)(About);