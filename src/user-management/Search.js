import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        type='text'
        className='form-control mb-3 w-50'
      />
    );
  }
}

export default Search;
