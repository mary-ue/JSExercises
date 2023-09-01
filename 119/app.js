/* 
Существует много языков программирования, например, Java, JavaScript, PHP, C, C++.
Напишите регулярное выражение, которое найдёт их все в строке Java JavaScript PHP C++ C:
*/

let regexp = /Java(script)?|PHP|C\+*/gi;

console.log("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C