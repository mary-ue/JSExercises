/* 
Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
*/

tree.onclick = function (evt) {
  let elem = evt.target.closest('li');
  if(!elem) return;
  if(!tree.contains(elem)) return;

  [...elem.children].forEach((child) => {
    child.classList.toggle('visually-hidden');
  })
}