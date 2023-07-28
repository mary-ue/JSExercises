/* 
Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.
Когда пользователь закроет страницу и потом откроет её заново он должен увидеть последнее введённое значение.
*/

document.addEventListener('DOMContentLoaded', () => {
  const areaValue = localStorage.getItem('input');
  if (!areaValue) return;
  area.value = areaValue;
})

area.addEventListener('input', () => {
  localStorage.setItem('input', area.value)
})

const clearText = () => {
  area.value = '';
  localStorage.removeItem('input');
}