/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
*/

function ucFirst(str) {
  if (!str) return str;

  let firstLetter = str[0].toUpperCase();
  let strFromSecondLetter = str.slice(1);
  return firstLetter + strFromSecondLetter;
}

console.log(ucFirst('one'))