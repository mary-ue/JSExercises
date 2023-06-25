/*
Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
*/

contents.onclick = (evt) => {
  if (evt.target.nodeName !== 'A') return;

  function handleLink(href) {
    let isLeaving = confirm(`Перейти на ${href}?`);
    if (!isLeaving) return false;
  }

  let target = evt.target.closest('a');

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
};

