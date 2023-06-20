/* 
Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
*/

let button = document.querySelector('#hider');
let elem = document.querySelector('#text');

button.addEventListener('click', () => {
  elem.hidden = true;
})