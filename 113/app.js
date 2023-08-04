/* 
Найти все HTML-комментарии в тексте.
*/

let regexp = /<!--.*?-->/gs;

let str = `... <!-- My -- comment
test --> ..  <!----> ..
`;

console.log(str.match(regexp)); // '<!-- My -- comment \n test -->', '<!---->'