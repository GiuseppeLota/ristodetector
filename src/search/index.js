import { connect } from 'react-redux';
import { fetchBusinesses } from './actions';
import { getBusinesses, businessesLoaded } from './reducer';

import SearchPage from './components/';

const mapDispatchToProps = {
  fetchBusinesses
};

const mapStateToProps = (state) => {
  return {
    businesses: getBusinesses(state),
    loaded: businessesLoaded(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);