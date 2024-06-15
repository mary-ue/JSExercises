let y = 0;
let left = document.querySelector('.block-left');
let right = document.querySelector('.block-right');

document.querySelector('.container').onmousewheel = (evt) => {
  // проверка на то, что крутим на себя (вниз) колесико мыши
  if (evt.deltaY > 0) {
      // 300 = высота блока - высота родителя
    if (y < 300) {
      y = y + 10;
    }
  } else {
    if (y - 10 > 0) {
      y = y - 10;
    }
  }

  left.style.top = - y + 'px';
  right.style.bottom = - y + 'px';
}