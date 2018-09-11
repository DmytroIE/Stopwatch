function getFormattedTime(time) {
  const timeObj = new Date(time);
  
  return (timeObj.getMinutes()<10? '0'+timeObj.getMinutes(): timeObj.getMinutes())
  + ':'
  + (timeObj.getSeconds()<10? '0'+timeObj.getSeconds(): timeObj.getSeconds())
  + '.'
  + Number.parseInt(timeObj.getMilliseconds()/100);
}

export default getFormattedTime;