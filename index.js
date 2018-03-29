const formatDate = (timeInSeconds) => {

const hour = Math.floor(timeInSeconds/3600);
const restHour = timeInSeconds%3600;
const min = Math.floor(restHour/60);
const sec = Math.round(restHour%60);


if(timeInSeconds == null) {
  return '0s';
} else if(hour === 0 && min ===0) {
  return sec+'s';
} else if(hour === 0 && sec ===0){
  return min+'m';
} else if(min === 0 && sec === 0){
  return hour+'h';
} else if(hour === 0) {
  return min+'m ' + sec+'s';
} else if(min === 0) {
  return hour+'h ' + sec+'s';
} else if(sec === 0){
  return hour+'h '+ min+'m';
} else {return hour+'h ' + min+'m ' + sec+'s';}

};

module.exports = formatDate;
