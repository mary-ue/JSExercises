/* 
У нас есть строка с HTML-документом.
Напишите регулярное выражение которое вставляет <h1>Hello</h1> сразу же после тега <body>. У тега могут быть атрибуты.
После этого значение str
*/

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

str = str.replace(/<body.*?>/, '$&<h1>Hello</h1>');

console.log(str);

