/* 
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

Вот так:
let array = [1, 2, 3];
array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего
Другими словами, array[-N] – это то же, что и array[array.length - N].
Создайте прокси, который реализовывал бы такое поведение.
*/

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop.startsWith('-')) {
      prop = +prop + target.length;
    } 
    
    return Reflect.get(...arguments);
  }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
