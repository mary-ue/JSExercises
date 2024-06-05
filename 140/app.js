document.querySelector('#test').onmousemove = (evt) => {
  document.querySelector('#offx').innerHTML = evt.offsetX;
  document.querySelector('#offy').innerHTML = evt.offsetY;
}