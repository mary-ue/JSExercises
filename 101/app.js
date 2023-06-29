/* 
Используя JavaScript:

1. Выведите значение и текст выбранного пункта.
2. Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным.
*/

// 1
let selectedOptionValue = genres.options[genres.selectedIndex].value;
let selectedOptionText = genres.options[genres.selectedIndex].text;
console.log(selectedOptionValue);
console.log(selectedOptionText);

// 2
let newOption = new Option('Классика', 'classic', true, true);
genres.append(newOption)