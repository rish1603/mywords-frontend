import React from 'react';
import SearchAppBar from './SearchAppBar';
import WordCard from './WordCard'

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
    // If you are going to bind your functions you need to bind them all I think xd
    this.getWord = this.getWord.bind(this);
    this.getUserWords = this.getUserWords.bind(this)
  }

  render() {
    let props = this.state

    return (
      <div>
        <SearchAppBar getWord={this.getWord} />
        {/* <WordCard {...props}></WordCard>
        <WordCard2 word={this.state.words[0]}></WordCard2> */}

        {this.state.words.reverse().map((data, index) => {
          return <WordCard key={index} word={data}></WordCard>
        })}
      </div>
    )
  }

  getWord(word) {
    const userName = localStorage.getItem('username')
    fetch('http://localhost:8080/' + userName + '/' + word, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then(() => {this.getUserWords()})
  }

  // Returns all user words
  getUserWords() {
    const userName = localStorage.getItem('username')
    fetch('http://localhost:8080/' + userName + '/myWords/all', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((result) => result.json())
      .then((info) => {
      	// Set states takes a function 
        this.setState(() => ({ words: info }))
      })
  }

  componentDidMount() {
    this.getUserWords()
  }
}


export default SearchScreen;