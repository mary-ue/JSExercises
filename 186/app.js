// Сколько раз каждый элемент встречается в массиве

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const fruitsObject = {};

for (let fruit of fruits) {
  if (!Object.keys(fruitsObject).includes(fruit)) {
    fruitsObject[fruit] = 1;
  } else {
    fruitsObject[fruit] += 1;
  }
}

console.log(fruitsObject);
