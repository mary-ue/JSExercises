/* 
Напишите JS-код, реализующий поведение «подсказка».
При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.
*/

let tooltipElem;

document.onmouseover = function(evt) {
  let target = evt.target;
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5
  };

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function() {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
}
