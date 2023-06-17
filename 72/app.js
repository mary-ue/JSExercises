/* 
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
*/

let links = document.querySelectorAll('a');
for (let link of links) {
  const path = link.getAttribute('href');
  if(!path) continue;

  if (path.includes('://') && !path.startsWith('http://internal.com')) {
    link.style.color = 'orange'
  }
}
