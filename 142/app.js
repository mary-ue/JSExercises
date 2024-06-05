/*
  Прогресс-бар должен заполняться за заданное количество времени. 
*/

function userProgress (t) {
  let start = 0;
  let time = Math.round(t * 1000 / 100);
  let progressElement = document.getElementById('user-progress');

  let intervalId = setInterval(() => {
    if (start > 100) {
      clearInterval(intervalId);
      userProggressCallback();
    } else {
      progressElement.value = start;
      start++;
    }
  }, time);
}

function userProggressCallback() {
  document.querySelector('.hidden').style.display = 'block';
}

userProgress(5);