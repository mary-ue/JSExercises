/* 
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.

*/

function Calculator() {
  this.read = function() {
    this.firstNum = +prompt('Введите первое число', '1');
    this.secondNum = +prompt('Введите второе число', '1');
  };

  this.sum = function() {
    return this.firstNum + this.secondNum;
  };

  this.mul = function() {
    return this.firstNum * this.secondNum;
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );