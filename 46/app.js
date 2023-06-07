/* 
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.
*/

// 1 
function sumTo(n) {
  let sum = 0;

  for (let i = 0; i <= n ; i++) {
    sum += i;
  }

  return sum;
}


// 2
function sumTo(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumTo(n-1);
  }
}

// 3 
function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(100)); // 5050