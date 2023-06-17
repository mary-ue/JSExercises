/* 
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
*/

function clear(elem) {
  elem.textContent = '';
}

setTimeout(() => clear(elem), 2000);

