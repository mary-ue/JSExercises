/* 
Захватите мышкой синий бегунок и двигайте его.

Важные детали:
Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. При этом бегунок должен останавливаться чётко в нужном конце полосы.
При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя).
*/

let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(evt) {
  evt.preventDefault(); // прндотвратить запуск выделения 

  let shiftX = evt.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(evt) {
    let newLeft = evt.clientX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;

    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp(evt) {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.ondragstart = function() {
  return false;
};

