import React, { Component } from 'react';

const Button = props => {
  return (
    <button 
      disabled = {props.isDisabled} 
      className = {`stopwatch__button ${props.additionalClass}`} 
      onClick = {props.onClick}>
        {props.text}
      </button>
  );
}

export default Button;