import React, { Component } from 'react';
import Timer from './utils/timer';
import Button from './button';
import Display from './display';
import LapsField from './lapsField';
import './index.css';

const STOP = 0;
const RUN = 1;
const PAUSE = 2;

class Stopwatch extends Component {
  constructor(props){
    super(props);

    this.state = {
      status: STOP,
      timeText: '00:00.0',
      laps: [],
    }

    this.timer = new Timer();
  }

  handleStart = () => {

    if (this.state.status !== RUN) {
      this.timer.start(this.onTick.bind(this));
      this.setState({
        ...this.state,
        status: RUN,
      });
    } else {
      this.timer.pause();
      this.setState({
        ...this.state,
        status: PAUSE,
      });
    }
  }

  handleLap = () => {
    if (this.state.status !== RUN) return;

    const newLaps = this.state.laps;
    newLaps.push(this.state.timeText);
    this.setState({
      ...this.state,
      laps: newLaps,
    });

  }

  handleReset = () => {
    this.timer.reset();
    this.setState({
      ...this.state,
      status: STOP,
      timeText: '00:00.0',
      laps: [],
    });
  }

  onTick(newText) {  // https://stackoverflow.com/questions/36299174/setinterval-in-a-react-app/36299242
    this.setState({
      ...this.state,
      timeText: newText,
    });
  }

  deleteLap = (index) => {
    const laps = this.state.laps;
    this.setState({
      ...this.state,
      laps: laps.filter((item, idx) => {return idx !== index}),
    })
  }

  render() {
    return (
        <div className='stopwatch'>
            <Display text = {this.state.timeText}/>
            <div className="stopwatch__buttons">
              <Button 
                text = { this.state.status === STOP? 'Start' : (this.state.status === RUN ? 'Pause' :'Continue') }
                onClick = {this.handleStart}
                isDisabled = {false}
                additionalClass = {'stopwatch__button--main'}
              />
              <Button 
                text = 'Lap'
                onClick = {this.handleLap}
                isDisabled = {false}
                additionalClass = {'stopwatch__button--main'}
              />
              <Button 
                text = 'Reset'
                onClick = {this.handleReset}
                isDisabled = {this.state.status !== RUN}
                additionalClass = {'stopwatch__button--main'}
              />
            </div>
            <LapsField laps = {this.state.laps} deleteLap = {this.deleteLap}/>

        </div>
    );
  }
}

export default Stopwatch;