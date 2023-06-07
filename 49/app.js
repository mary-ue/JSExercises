/* 
Допустим, у нас есть односвязный список.
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
Как лучше: с рекурсией или без?
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 1
function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

// 2 
// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value); 
//     tmp = tmp.next;
//   }
// }

printList(list);