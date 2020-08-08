import React, { Component } from 'react';
import firebase from './firebase.js'

class Results extends Component {
   constructor() {
      super()
      this.state = {
         leaderboard: []
      }
   }

   componentDidMount() {
      const dbRef = firebase.database().ref();

      dbRef.on('value', (snapshot) => {
         const data = snapshot.val();

         const updateLeaderboard = [];

         for (let madlib in data) {
            updateLeaderboard.push( data[madlib] )
         }

         this.setState({
            leaderboard: updateLeaderboard
         })
      })
   }

   render() {
      return(
         <ul>
            {
               this.state.leaderboard.map( (madlib, key) => {
                  return <li key={key}>{madlib}</li>
               })
            }
         </ul>
      )
   }
}

export default Results;