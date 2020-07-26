import {connect} from 'react-redux';
import About from './About';

const mapStateToProps = (state) => {
  state.app.layout = 'dark';
  return {
    layout: state.app.layout,
  };
};


export default connect(mapStateToProps)(About);