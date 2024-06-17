document.querySelector('#elastic').oninput = function() {
  let val = this.value.trim();
  let elasticElems = document.querySelectorAll('.elastic li');

  if (val.length > 0) {
    elasticElems.forEach(function(elem) {
      let text = elem.textContent || elem.innerText;
      let pos = text.toLowerCase().indexOf(val.toLowerCase());

      if (pos === -1) {
        elem.classList.add('hide');
        elem.innerHTML = text; 
      } else {
        elem.classList.remove('hide');
        elem.innerHTML = insertMark(text, pos, val.length);
      }
    });
  } else {
    elasticElems.forEach(function(elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.textContent || elem.innerText;
    });
  }
}

function insertMark(string, pos, len) {
  if (pos < 0 || pos >= string.length) return string;

  len = (pos + len) > string.length ? string.length - pos : len;

  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
