// Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст,
// а значение - массив студентов

const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

const groupStudentsByAge = (list) => {
  const grouped = {};

  students.forEach((student) => {
    if (!grouped[student.age]) {
      grouped[student.age] = [student];
    } else {
      grouped[student.age].push(student);
    }
  });

  return grouped;
};

console.log(groupStudentsByAge(students));
