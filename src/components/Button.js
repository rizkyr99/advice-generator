import React from 'react';
import { FaDiceFive } from 'react-icons/fa';

class Button extends React.Component {
  render() {
    return (
      <button className='random-button' onClick={console.log(this.props)}>
        <FaDiceFive className='dice' />
      </button>
    );
  }
}

export default Button;
