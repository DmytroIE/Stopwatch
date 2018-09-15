import React from 'react';
import Button from './button';

const LapItem = props => {
  return (
    <li key = {props.index} className='lap-item'>
      <span>{props.text}</span>
      <Button 
        onClick = {() => {props.deleteLap(props.index);}} 
        text = 'Delete'
        isDisabled = {false}
        additionalClass = {'stopwatch__button--aux'}
      />
    </li>
  )
}

const LapsField = props => {
    return (
      <ul className='laps-list stopwatch__laps-list'>
        {props.laps.map((item, idx) => {
          return (
            <LapItem index = {idx} text = {item} deleteLap = {props.deleteLap}/>
          )
        }
        )
        }
      
      </ul>
    );
}


export default LapsField;