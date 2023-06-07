/* 
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

// function printNumbers(from, to) {

//   let i = from; 

//   let timerId = setInterval(() => {
//     console.log(i);
    
//     if (i == to) {
//       clearInterval(timerId);
//     }
//     i++;
//   }, 1000)
// }

function printNumbers(from, to) {
  let i = from;

  setTimeout(function go() {
    console.log(i);

    if (i < to) {
      setTimeout(go, 1000)
    }
    i++;
  }, 1000)
}

printNumbers(2, 4)