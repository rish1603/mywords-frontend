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
    this.getWord = this.getWord.bind(this);
    this.getUserWords = this.getUserWords.bind(this)
  }

  render() {
    let props = this.state

    return (
      <div>
        <SearchAppBar getWord={this.getWord} />
        {this.state.words.reverse().map((data, index) => {
          return <WordCard key={index} word={data}></WordCard>
        })}
      </div>
    )
  }

  getWord(word) {

    if (this.state.words.map(i => i.word).some(i => i == word)) {
      return console.log("word already searched")
    }

    else {
      const userName = localStorage.getItem('username')
      fetch('http://68.183.35.153:8080/' + userName + '/' + word, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }).then((data) => {
        console.log(data)
        this.getUserWords()
      })
    }
  }

  // Returns all user words
  getUserWords() {
    const userName = localStorage.getItem('username')
    fetch('http://68.183.35.153:8080/' + userName + '/myWords/all', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    }).then((result) => result.json())
      .then((info) => {
        console.log(info)
        this.setState(() => ({ words: info }))
      }).catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getUserWords()
  }
}


export default SearchScreen;