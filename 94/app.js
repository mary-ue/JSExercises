/* 
Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.
*/

let tooltip;

document.onmouseover = function(evt) {
  let anchorElem = evt.target.closest('[data-tooltip]');
  if (!anchorElem) return;

  tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
};

document.onmouseout = function(evt) {
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
};

function showTooltip(anchorElem, html) {
  let tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  let coords = anchorElem.getBoundingClientRect();

  let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) top = coords.top + anchorElem.offsetHeight + 5;

  tooltipElem.style.top = top + 'px';
  tooltipElem.style.left = left + 'px';

  return tooltipElem;
}