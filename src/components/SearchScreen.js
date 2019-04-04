import React from 'react';
import SearchAppBar from './searchscreen/SearchAppBar';

class SearchScreen extends React.Component {
  render() {
    return (
      <SearchAppBar/>
    )
  }
  componentDidMount() {
    console.log("Component Mounted")
  }
}

export default SearchScreen;