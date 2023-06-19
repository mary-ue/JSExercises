/* 
Напишите код для сортировки по столбцу "name"
*/

let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].textContent > rowB.cells[0].textContent ? 1 : -1);

table.tBodies[0].append(...sortedRows);