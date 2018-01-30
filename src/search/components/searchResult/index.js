import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.css';
import SearchItem from '../searchItem/';

const SearchResult = (props) => (
  <div className="search-result">
    {props.businesses && props.businesses.map(business => {
      return (<SearchItem key={business.id} business={business} />);
    })}
  </div>
);

SearchResult.propTypes = {
  businesses: PropTypes.array
};

export default SearchResult;
