import React, { Component } from 'react';
import Timer from './utils/timer';
import Button from './button';
import Display from './display';
import './index.css';


class Stopwatch extends Component {
  constructor(props){
    super(props);

    this.state = {
      isRunning: false,
      onPause: true,
      timeText: '00:00.0',
    }

    this.timer = new Timer();
  }

  handleStart = () => {
    // Вот это место!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (!this.state.isRunning){
      this.setState({
        ...this.state,
        isRunning: true,
      });
    }

    if (this.state.onPause) {
      this.timer.start(this.onTick.bind(this));
      this.setState({
        ...this.state,
        onPause: false,
      });
    } else {
      this.timer.pause();
      this.setState({
        ...this.state,
        onPause: true,
      });
    }
  }

  handleLap = () => {

  }

  handleReset = () => {
    this.timer.reset();
    this.setState({
      ...this.state,
      isRunning: false,
      onPause: true,
      timeText: '00:00.0',
    });
  }

  onTick(newText){  // https://stackoverflow.com/questions/36299174/setinterval-in-a-react-app/36299242
    this.setState({
      ...this.state,
      timeText: newText,
    })
  }

  render() {
    return (
        <div className='stopwatch'>
            <Display text = {this.state.timeText}/>
            <div className="stopwatch__buttons">
              <Button 
                text = { !this.state.isRunning? 'Start' : (this.state.onPause? 'Continue' :'Pause') }
                onClick = {this.handleStart}
              />
              <Button 
                text = 'Lap'
                onClick = {this.handleLap}
              />
              <Button 
                text = 'Reset'
                onClick = {this.handleReset}
              />
            </div>
        </div>
    );
  }
}

export default Stopwatch;