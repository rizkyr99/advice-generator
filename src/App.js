import React from 'react';
import { BsPauseFill } from 'react-icons/bs';
import { FaDiceFive } from 'react-icons/fa';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='card'>
        <h2 className='advice-id'>ADVICE #117</h2>
        <p className='quote'>{this.state.advice}</p>
        <div className='divider'>
          <div className='dividerIconWrap'>
            <BsPauseFill className='dividerIcon' />
          </div>
        </div>
        <button className='random-button' onClick={this.fetchAdvice}>
          <FaDiceFive className='dice' />
        </button>
      </div>
    );
  }
}

export default App;
