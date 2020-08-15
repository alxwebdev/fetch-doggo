import React, { Component } from 'react'
import DogsBreedList from './DogsBreedList'
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <DogsBreedList />
      </div>
    );
  }
}



export default App;
