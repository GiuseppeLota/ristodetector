import React from 'react';
import PropTypes from 'prop-types';
import {LOCATION_SEARCH} from "../../constants";
import './SearchInput.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', errorNoValue: false};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.state.value) {
      this.setState({value: this.state.value, errorNoValue: false});
      this.props.searchFn(this.state.value, LOCATION_SEARCH);
    } else {
      this.setState({value: this.state.value, errorNoValue: true});
    }
  }

  render() {
    return (
      <div className="search-input">
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)} id='search-text-input'
          placeholder="Insert a location"
          className={this.state.errorNoValue ? "error-no-value" : ""}/>
        <div id='button-holder' onClick={this.handleSearch.bind(this)}>
          <img src="/search-icon_32x.png" alt="search-icon"/>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchFn: PropTypes.func.isRequired
};

export default SearchInput;
