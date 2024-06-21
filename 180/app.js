// слова, которые надо вырезать
const abuse = ['hi', 'blin', 'goose'];

document.querySelector('button').onclick = () => {
  let text = document.querySelector('textarea').value;

  for (let i = 0; i < abuse.length; i++) {
    while(text.indexOf(abuse[i]) !== -1) {
      text = text.replace(abuse[i], star(abuse[i].length));
    }
  }

  document.querySelector('#out').innerHTML += `<div class="comment">${text}</div>`
}

function star(n) {
  out = '';
  for (let i = 0; i < n; i++) {
    out += '*'
  }
  return out;
}

