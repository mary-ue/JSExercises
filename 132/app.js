/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function createNumber(value, operation) {
  return operation ? operation(value) : value;
}

function zero(operation) {
  return createNumber(0, operation);
}

function one(operation) {
  return createNumber(1, operation);
}

function two(operation) {
  return createNumber(2, operation);
}

function three(operation) {
  return createNumber(3, operation);
}

function four(operation) {
  return createNumber(4, operation);
}

function five(operation) {
  return createNumber(5, operation);
}

function six(operation) {
  return createNumber(6, operation);
}

function seven(operation) {
  return createNumber(7, operation);
}

function eight(operation) {
  return createNumber(8, operation);
}

function nine(operation) {
  return createNumber(9, operation);
}

function plus(num) {
  return function (operation) {
    return operation !== undefined ? operation + num : num;
  };
}

function minus(num) {
  return function (operation) {
    return operation !== undefined ? operation - num : -num;
  };
}

function times(num) {
  return function (operation) {
    return operation !== undefined ? operation * num : 0;
  };
}

function dividedBy(num) {
  return function (operation) {
    return operation !== undefined ? Math.floor(operation / num) : 0;
  };
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3