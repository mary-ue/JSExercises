/* Есть дерево, организованное в виде вложенных списков ul/li.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
*/

let lis = document.querySelectorAll('li');

for (let li of lis) {
  let childrenCount = li.querySelectorAll('li').length;
  if (!childrenCount) continue;

  li.firstChild.data += `[${childrenCount}]`;
}