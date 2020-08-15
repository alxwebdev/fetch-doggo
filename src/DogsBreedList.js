import React, { Component } from 'react';
import axios from 'axios';
import './DogBreedList.css'
const API_BASE_URL = "https://dog.ceo/api/breeds/image/random";

class DogsBreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {},
      wiggle: false
    };
    this.getDog = this.getDog.bind(this);
  }
  async componentDidMount() {
    let dog = await axios.get(API_BASE_URL);
    this.setState({ dogs: dog.data });
  }
  async getDog() {
    let dogRes = await axios.get(API_BASE_URL);
    this.setState({ dogs: dogRes.data, wiggle: true });
    setTimeout(() => {
      this.setState({wiggle: false})
    }, 1000);
  }
  render() {
    return (
      <div className="DogBreedList">
        <h1>Hi There - Fetch Infinite Dogs!</h1>
        <div className={`DogBreedList-polaroid ${this.state.wiggle ? 'wiggle' : ''} `}>
          <img src={this.state.dogs.message} alt='random dog' />
          <div className="DogBreedList-caption">#Good Boye</div>
        </div>
        <button className="DogBreedList-btn" onClick={this.getDog}>
          Get Dog!
        </button>
      </div>
    );
  }
}
export default DogsBreedList;