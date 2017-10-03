const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

function updateTime() {

  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let secDeg = second * 6;
  let minuteInSec = minute * 60 + second;
  let minDeg = minuteInSec/10;
  let hourInSec = hour * 3600 + minute * 60 + second;
  let hourDeg = hourInSec/120;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

updateTime();

setInterval(() => {
  updateTime();
}, 1000);
