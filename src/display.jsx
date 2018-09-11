import React, { Component } from 'react';

const Display = (props) => {
  return (
    <p className="stopwatch__timefield">{props.text}</p>
  );
}


export default Display;