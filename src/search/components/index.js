import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from './searchResult/index';
import SearchInput from './searchInput/index';

import './SearchPage.sass';


const SearchPage = (props) =>
  (
    <div className="search">
      <h2>Businesses:</h2>
      <SearchInput searchFn={props.fetchBusinesses}/>
      <SearchResult businesses={props.businesses}/>
    </div>
  );


SearchPage.propTypes = {
  fetchBusinesses: PropTypes.func.isRequired,
  businesses: PropTypes.array,
  loaded: PropTypes.bool.isRequired,
};

export default SearchPage;