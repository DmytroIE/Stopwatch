import React, { Component } from 'react';

const Button = props => {
  return (
    <button disabled = {false} className = 'stopwatch__button' onClick = {props.onClick}>{props.text}</button>
  );
}

export default Button;