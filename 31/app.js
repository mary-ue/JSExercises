/* 
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

function unique(arr) {
  let uniqueArr = [];
  
  arr.forEach((elem) => {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  });

  return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O" ];

console.log(unique(strings)); // кришна, харе, :-O