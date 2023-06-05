/* 
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
Используйте метод .reduce в решении.
*/

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  return arr.reduce((acc, elem) => {
    acc[elem.id] = elem;
    return acc;
  }, {})
}

let usersById = groupById(users);
console.log(usersById);

// после вызова у нас должно получиться:
/*
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/