import React, { Component } from 'react';

const Button = props => {
  return (
    <button className = 'stopwatch__button' onClick = {props.onClick}>{props.text}</button>
  );
}

export default Button;