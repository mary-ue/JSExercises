/* 
Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, 
она автоматически добавляет текущие время и дату в текст 
(чтобы посетитель мог прокрутить ещё).
*/

function populate() {
  while(true) {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
    document.body.insertAdjacentHTML('beforeend', `<p>Date: ${new Date()}</p>`);
  }
}

window.addEventListener('scroll', populate);

populate();


