import {connect} from 'react-redux';
import Contact from './Contact';

const mapStateToProps = state => ({
  contact: state.app.contact,
  
});


export default connect(mapStateToProps)(Contact);