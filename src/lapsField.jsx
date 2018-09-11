import React, { Component } from 'react';
import Button from './button';

const LapItem = props => {
  return (
    <li key = {props.index} className='laps-item'>
      <span>{props.text}</span>
      <Button 
        onClick = {(function(index) {return function() {props.deleteLap(index);}})(props.index)} 
        text = 'Delete'
        isDisabled = {false}
        additionalClass = {'stopwatch__button--aux'}
      />
    </li>
  )
}

class LapsField extends Component {
  render() {
    return (
      <ul className='laps-list stopwatch__laps-list'>
        {this.props.laps.map((item, idx) => {
          return (
            <LapItem index = {idx} text = {item} deleteLap = {this.props.deleteLap}/>
          )
        }
        )
        }
      
      </ul>
    );
  }
}


export default LapsField;