// Отсортировать массив

const users = [
  {
    name: 'John',
    age: 20,
  },
  {
    name: 'Alex',
    age: 30,
  },
  {
    name: 'Jane',
    age: 25,
  },
];

const sortedUsers = users.sort((u1, u2) => {
  return u1.name.localeCompare(u2.name);
});

console.log(sortedUsers);
