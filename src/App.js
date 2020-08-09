import React, { Component, Fragment } from 'react';
import Madlib from './Madlib.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      usersWords: {
        noun: '',
        adjective: '',
        adverb: '',
        number: '',
        sentence: '',
        period: ''
      },
      displayMadlib: false,
      madlibTemplate: ['This is a noun: ', '. This is an adjective: ', '. This is an adverb: ', '. This is a number: ', '. And this is a sentence: ', '.'],
      madlib: ''
    };
  }

  handleChange = (word, event) => {
    const { usersWords } = this.state 
    this.setState({
      usersWords: {
        ...usersWords,
        [word]: event.target.value
      }
    });
  }
  
  // handleSubmit = (event) => {
  //   console.log(this.state.usersWords)
  //   event.preventDefault();
  // }

  displayMadlib = () => {
    const copyOfWords = Object.values(this.state.usersWords)
    const madlibsArray = [...this.state.madlibTemplate]

    const generateMadlib = madlibsArray.map((i, k) => {
      return (
        i + copyOfWords[k]
      )
    })

    const completeMadlib = generateMadlib.join('')
    this.setState({madlib: completeMadlib})

    this.setState({displayMadlib: !this.state.displayMadlib})
  }

  render() {
    const { noun, adjective, adverb, number, sentence} = this.state.usersWords
    return (
      <Fragment>
        <header>
          <h1>Madlibs!</h1>
          <p>Write in the words you think match the prompts and then click submit.</p>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <label>
              Noun:
              <input type="text" value={noun} onChange={(e) => this.handleChange('noun', e)}/>
            </label>

            <label>
              Adjective:
              <input type="text" value={adjective} onChange={(e) => this.handleChange('adjective', e)}/>  
            </label>

            <label>
              Adverb:
              <input type="text" value={adverb} onChange={(e) => this.handleChange('adverb', e)}/>
            </label>
            
            <label>
              Number:
              <input type="text" value={number} onChange={(e) => this.handleChange('number', e)}/>
            </label>
            
            <label>
              Sentence:
              <textarea value={sentence} onChange={(e) => this.handleChange('sentence', e)}/>
            </label>
          </form>
            
          <button onClick={this.displayMadlib}>Click to display the madlib!</button>
          {this.state.displayMadlib ? <Madlib propMadlib={this.state.madlib} /> : null}
        </main>
      </Fragment>
    );
  }
}

export default App;
