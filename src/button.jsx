import React from 'react';

const Button = props =>
  <button 
    disabled = {props.isDisabled} 
    className = {`stopwatch__button ${props.additionalClass}`} 
    onClick = {props.onClick}>
      {props.text}
  </button>;

export default Button;