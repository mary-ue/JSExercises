/* 
Напишите регулярное выражение, которое ищет многоточие (3 и более точек подряд).
*/

let regexp = /\.{3,}/g;
console.log("Привет!... Как дела?.....".match(regexp)); // ..., .....