import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <nav>
          <a href='!#'>
            <i class='fas fa-dog'></i>
          </a>
          <a href='!#'>Doggo App</a>
          <a href='!#'>
            <i class='fas fa-paw'></i>
          </a>
        </nav>
      </div>
    );
  }
}
export default NavBar;
