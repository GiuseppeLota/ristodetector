import React from 'react';
import PropTypes from 'prop-types';
import './SearchItem.css';

const SearchItem = (props) => (
  <div className="search-item">
    <img src={props.business.imageUrl} alt={props.business.name}/>
    <div>{props.business.name}</div>
    <div>Phone: {props.business.phone && " - "}</div>
    <div>
      Categories: {props.business.categories.map(cat => <div key={cat.title}>{cat.title}</div>)}
    </div>
  </div>
);

SearchItem.propTypes = {
  business: PropTypes.object
};

export default SearchItem;
