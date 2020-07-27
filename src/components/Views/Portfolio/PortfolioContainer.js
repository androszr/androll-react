import {connect} from 'react-redux';
import Portfolio from './Portfolio';

const mapStateToProps = state => ({
  portfolio: state.app.portfolio,
  
});


export default connect(mapStateToProps)(Portfolio);