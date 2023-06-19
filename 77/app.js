/* Создайте цветные часы */

let timerId;

function update() {
  let clock = document.querySelector('#clock');

  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.querySelector('.hour').textContent = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.querySelector('.min').textContent = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.querySelector('.sec').textContent = seconds;
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }

  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}