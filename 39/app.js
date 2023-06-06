/* 
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

function getWeekDay(date) {
  let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  let dayIndex = date.getDay();

  return week[dayIndex];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date)); 
