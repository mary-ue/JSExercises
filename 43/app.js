/* 
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let midnight = new Date(year, month, day, 0, 0, 0, 0);

  return (now.getTime() - midnight.getTime()) / 1000;
}

console.log(getSecondsToday());
