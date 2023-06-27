/* 
Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.

Она должна работать следующим образом:

Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. Если страница прокручивается назад, стрелка исчезает.
Когда нажимается стрелка, страница прокручивается вверх.
*/

arrowTop.hidden = true;

arrowTop.onclick = function() {
  window.scrollTo({
    top: 0,
    left: window.scrollX,
    behavior: 'smooth'
  });
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (window.scrollY < document.documentElement.clientHeight);
});

