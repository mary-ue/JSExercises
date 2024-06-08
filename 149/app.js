/* 
Напишите функцию, которая преобразует число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для число 245 должны получить следующий объект: 
{
  "единицы": 5,
  "десятки": 4,
  "сотри": 2,
}

Если число больше 999, нужно выдать ошибку и вернуть пустой объект.
*/

'use strict';

class cutNum {
  constructor(num) {
    if (typeof num == 'number' && num >= 0 && num < 1000) {
      this.n = num % 10;
      this.nn = Math.floor((num / 10) % 10);
      this.nnn = Math.floor(num / 100);
    } else {
      console.log('error');
    }
  }
}

let num1 = new cutNum(345);
let num2 = new cutNum(8345);
console.log(num1);
console.log(num2);
