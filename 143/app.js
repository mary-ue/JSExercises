/* 
  Создать панель меню, где пользователь может выбрать компоненты бургера.
  Некоторые компоненты обязательные, некоторые можно менять. 
  Вычислить стоимость и калорийность бургера. 
*/

document.getElementById('result').onclick = getResult;

getResult();

function getResult() {
  const menu = document.getElementsByClassName('menu');
  let cost = 0;
  let kkal = 0;

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].checked) {
      cost += parseFloat(menu[i].dataset.cost);
      kkal += parseFloat(menu[i].dataset.kkal);
    }
  }

  document.getElementById('cost').textContent = cost;
  document.getElementById('kkal').textContent = kkal;
}