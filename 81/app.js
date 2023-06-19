/* 
Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.
*/

let coords = field.getBoundingClientRect();
console.log(`Левый верхний угол с координатами: ${coords.x}, ${coords.y}`);
console.log(`Нижний правый угол с координатами: ${coords.right}, ${coords.bottom}`);
console.log(`Левый верхний внутренний угол: ${coords.left + field.clientLeft}, ${coords.top + field.clientTop}`);



console.log(`Нижний правый внутренний угол: ${coords.left + coords.width - field.clientLeft}, ${coords.top + field.clientTop + field.clientHeight}`);
console.log(coords)







