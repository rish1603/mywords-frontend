import React from 'react';
import SearchAppBar from './SearchAppBar';
import WordCard from './WordCard'
import WordCard2 from './WordCard2'

class SearchScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      words: [{
        word: "",
        definition: "",
        lexicalCategory: "",
        sentences: [""]
      }]
    }
    this.getWord = this.getWord.bind(this);
  }

  getWord(data) {
    console.log(data)
  }

  render() {
    let props = this.state

    return (
      <div>
        <SearchAppBar getWord={this.getWord} />
        {/* <WordCard {...props}></WordCard>
        <WordCard2 word={this.state.words[0]}></WordCard2> */}

        {this.state.words.map((data, index) => {
          return <WordCard2 key={index} word={data}></WordCard2>
        })}


      </div>
    )
  }

  componentDidMount() {
    const userName = localStorage.getItem('username')
    fetch('http://localhost:8080/' + userName + '/myWords/all', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((result) => result.json())
      .then((info) => {
        this.setState({words: info})
      })
  }
}


export default SearchScreen;