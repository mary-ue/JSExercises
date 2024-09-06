// Написать функцию, которая принимает два аргумента:
// массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива тх аргумента равна числу,
// которые приходит вторым аргументом, функция должна вернуть
// новый массив из этих двух числел в любом порядке.
// Если решения нет, вернуть пустой массив.

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

const findPairs = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const numFirst = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const numSecond = nums[j];

      if (numFirst + numSecond === target) {
        return [numFirst, numSecond];
      }
    }
  }

  return [];
};

console.log(findPairs(myNumbers, sum));
