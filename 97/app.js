/*
Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.
Например, код ниже выведет alertпри одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)
*/

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(evt) {
    pressed.add(evt.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup' , function(evt) {
    pressed.delete(evt.code);
  });
}

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
);