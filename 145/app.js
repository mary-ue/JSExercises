/* 
  Есть массив строк, в котором находятся значения в px, em, etc.
  Необходимо перевести все значения в число, после чего удалить все отрицательные 
  и отсортировать массив. 
*/

let size = ['15px', '12pt', '34em', '-3px', '2%'];

function toNum(arr) {
  let out = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseFloat(arr[i]);
    if (arr[i] >= 0) {
      out.push(arr[i]);
    }
  }

  out.sort((a, b) => a - b);
  return out;
}

function toNum2(arr) {
  let newArr = arr
    .map((el) => {
      return parseFloat(el);
    })
    .filter((el) => el >= 0)
    .sort((a, b) => a - b);

  return newArr;
}

console.log(toNum(size));
console.log(toNum2(size));
