/* 
Создайте регулярное выражение для поиска всех BB-кодов и их содержимого.
Если теги вложены, то нужно искать самый внешний тег (при желании можно продолжить поиск в его содержимом).
*/

let regexp = /\[(b|url|quote)\].*?\[\/\1\]/gs;

let str = "..[url]http://ya.ru[/url]..";
console.log(str.match(regexp)); // [url]http://ya.ru[/url]

let str1 = "..[url][b]http://ya.ru[/b][/url]..";
console.log(str1.match(regexp)); // [url][b]http://ya.ru[/b][/url]