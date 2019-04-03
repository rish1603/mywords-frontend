import React from 'react';
import SearchField from './searchscreen/SearchField';

class SearchScreen extends React.Component {
  render() {
    return (
      <SearchField/>
    )
  }
  componentDidMount() {
    console.log("Component Mounted")
  }
}

export default SearchScreen;