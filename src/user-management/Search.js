import React, { Component } from 'react';

class Search extends Component {
  render() {
    console.log('Search render');
    return (
      <input
        placeholder='...search by name'
        onChange={this.props.onChange}
        type='text'
        className='form-control mb-3 w-50'
      />
    );
  }
}

export default React.memo(Search);
