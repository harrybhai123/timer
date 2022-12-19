let seconds = document.getElementById("sec");

let milliSeconds = document.getElementById("millisec");

let start = document.getElementById("start");

let stop = document.getElementById("stop");

let reset = document.getElementById("reset");

let sec = 0;
let milliSec = 0;
let interval;

let timer = () => {
  milliSec++;

  if (milliSec < 9) {
    milliSeconds.innerHTML = "0" + milliSec;
  }
  if (milliSec > 9) {
    milliSeconds.innerHTML = milliSec;
  }

  if (milliSec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    milliSec = 0;
    milliSeconds.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

start.addEventListener("click", function () {
  interval = setInterval(timer, 20);
});
stop.addEventListener("click", function () {
  clearInterval(interval);
});
reset.addEventListener("click", function () {
  clearInterval(interval);
  sec = "00";
  milliSec = "00";
  seconds.innerHTML = sec;
  milliSeconds.innerHTML = milliSec;
});
