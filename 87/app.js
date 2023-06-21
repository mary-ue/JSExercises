/* 
Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
*/

container.onclick = function (evt) {
  if (evt.target.className !== 'remove-button') return;

  let pane = evt.target.closest('.pane');
  pane.remove();
}