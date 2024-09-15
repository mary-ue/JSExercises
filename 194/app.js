// отфильтровать falsy-значения

const array = [7, 'correct', 0, false, 9, NaN, ''];

const notFalsy = array.filter((n) => !!n);

console.log(notFalsy);
