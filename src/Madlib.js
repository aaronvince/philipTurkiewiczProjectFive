import React, { Component } from 'react';
// import firebase from './firebase.js';

class Madlib extends Component {
   constructor() {
      super()
      this.state = {madlib: ''}
   }

   render() {
      return(
         <section>
            <h2>Here's your Madlib!</h2>

            <button>Save Madlib!</button>
         </section>
      )
   }
}

export default Madlib;