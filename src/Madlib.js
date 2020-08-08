import React, { Component } from 'react';
import firebase from './firebase.js';
import Results from './Results.js'

class Madlib extends Component {
   constructor() {
      super()
      this.state = {saveMadlib: ''}
   }

   handleSave = (madlib) => {
      const dbRef = firebase.database().ref();

      dbRef.push(madlib);
   }

   render() {
      return(
         <section>
            <h2>Here's your Madlib!</h2>
            <p>{this.props.propMadlib}</p>
            <button onClick={() => this.handleSave(this.props.propMadlib)}>Save Madlib!</button>
            <h2>Leaderboards!</h2>
            <Results />
         </section>
      )
   }
}

export default Madlib;