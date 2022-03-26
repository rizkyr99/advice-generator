import React from 'react';
import { BsPauseFill } from 'react-icons/bs';
import { FaDiceFive } from 'react-icons/fa';

class Card extends React.Component {
  handleClick() {
    const { onClick } = this.props;

    onClick();
  }
  render() {
    return (
      <div className='card'>
        <h2 className='advice-id'>ADVICE #117</h2>
        <p className='quote'>{this.props.advice}</p>
        <div className='divider'>
          <div className='dividerIconWrap'>
            <BsPauseFill className='dividerIcon' />
          </div>
        </div>
        <button className='random-button' onClick={this.handleClick}>
          <FaDiceFive className='dice' />
        </button>
      </div>
    );
  }
}

export default Card;
