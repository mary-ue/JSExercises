// Создать массив, который содержит только уникальные значения

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const uniqueArr = [...new Set(fruits)];

console.log(uniqueArr);