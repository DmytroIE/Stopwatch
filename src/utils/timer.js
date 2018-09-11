import getFormattedTime from './getFormatDate';

class Timer {

  constructor() {
    this.startTime = 0;
    this.id = null;
    this.onPause = true;
    this.onPauseTime = 0;
    this.timeText = '00:00.0';
  }


  start(callback) {
    this.onPause = false;
    if (!this.id) { // чтобы второй раз случайно не инициировать таймер
      this.startTime = Date.now();
      this.id = setInterval(() => {
        callback( getFormattedTime(Date.now() - this.startTime + this.onPauseTime) );
      }, 100);
    }
  }
  pause() {
    this.onPause = true;
    this.onPauseTime = Date.now() - this.startTime + this.onPauseTime;
    clearInterval(this.id);
    this.id = null;
  }

  reset() {
    clearInterval(this.id);
    this.startTime = 0;
    this.onPause = true;
    this.onPauseTime = 0;
    this.id = null;
    this.timeText = '00:00.0';
  }
}

export default Timer;