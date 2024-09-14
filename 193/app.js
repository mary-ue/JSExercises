// Развернуть массив элементов (поменять порядок на противоположный)

const array = [100, 2, 2, 4, 5, 6, 6];

console.log([...array].map(array.pop, array));