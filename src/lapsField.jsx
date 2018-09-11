import React, { Component } from 'react';
import Button from './button';

const LapItem = props => {
}

const LapsField = (props) => {
  return (
    <ul className="laps-list stopwatch__laps-list">
      {props.laps.map((item, idx) => {
        return (
          <li key = {idx} className='laps-item'>
            {item}
          </li>
        )
      }
      )
      }
    
    </ul>
  );
}


export default LapsField;