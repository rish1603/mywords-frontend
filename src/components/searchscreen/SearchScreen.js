import React from 'react';
import SearchAppBar from './SearchAppBar';

class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.getWord = this.getWord.bind(this);
  }

getWord(data) {
  console.log(data)
}

  render() {
    return (
      <SearchAppBar getWord={this.getWord}/>
    )
  }
  componentDidMount() {
  }

}

export default SearchScreen;