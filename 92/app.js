/* Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант. */

thumbs.addEventListener('click', (evt) => {
  evt.preventDefault();

  let target = evt.target.closest('a');
  if (!target) return;

  largeImg.src = target.getAttribute('href');
  largeImg.alt = target.getAttribute('title');
});