let result = {};
let step = 0;

function showQuestion(questionNumber) {
  document.querySelector('.question').innerHTML = quiz[step]['q'];
  let answer = '';
  for (let key in quiz[step]['a']) {
    answer += `<li class="answer-variant" data-v="${key}">${quiz[step]['a'][key]}</li>`;
  }
  document.querySelector('.answer').innerHTML = answer;
}

document.onclick = function (evt) {
  evt.stopPropagation();
  if (evt.target.classList.contains('answer-variant') && step < quiz.length) {
    if (result[evt.target.dataset.v] !== undefined) {
      result[evt.target.dataset.v]++;
    } else {
      result[evt.target.dataset.v] = 0;
    }

    step++;

    if (step == quiz.length) {
      document.querySelector('.question').remove();
      document.querySelector('.answer').remove();
      showResult();
    } else {
      showQuestion(step);
    }
  }
};

function showResult() {
  let key = Object.keys(result).reduce((a, b) => {
    return result[a] > result[b] ? a : b;
  });

  let div = document.createElement('div');
  div.classList.add('result');
  div.innerHTML = answers[key]['description'];

  let img = document.createElement('img');
  img.classList.add('img');
  img.src = answers[key]['image'];

  document.querySelector('main').appendChild(img);
  document.querySelector('main').appendChild(div);
}

showQuestion(step);
