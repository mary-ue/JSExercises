/* 
Напишите регулярное выражение, которое ищет тег <style...>. 
Оно должно искать весь тег: он может как не иметь атрибутов <style>, так и иметь несколько <style type="..." id="...">.
…Но регулярное выражение не должно находить <styler>!
*/

let regexp = /<style(>|\s.*?>)/g;

console.log('<style> <styler> <style test="...">'.match(regexp)); // <style>, <style test="...">
