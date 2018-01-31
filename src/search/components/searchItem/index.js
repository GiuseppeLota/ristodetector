import React from 'react';
import PropTypes from 'prop-types';
import './SearchItem.css';

const SearchItem = (props) => (
  <div className="search-item">
    <div className="card-image" style={{backgroundImage: 'url(' + props.business.imageUrl + ')'}}/>
    <div className="infos">
      <div className="business-name">{props.business.name}</div>
      <div className="details">
        <div className="phone">Phone: {props.business.phone && " - "}</div>
        <div className="address">
          {props.business.address.map(addressPart => {
            return (<div className="address-part" key={addressPart}>{addressPart}</div>);
          })}
        </div>
      </div>
    </div>
  </div>
);

SearchItem.propTypes = {
  business: PropTypes.object
};

export default SearchItem;
