/* 
Создайте <div>, который превращается в <textarea>, если на него кликнуть.
<textarea> позволяет редактировать HTML в элементе <div>.
Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.

Заметьте: <textarea> должен иметь class="edit"
style.css содержит стиль, чтобы <textarea> и <div> были одного размера
*/

let area = null;
let view = document.querySelector('#view');

view.onclick = function() {
  editStart();
};

function editStart() {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = view.innerHTML;

  area.onkeydown = function(evt) {
    if (evt.key == 'Enter') {
      this.blur();
    }
  }

  area.onblur = function() {
    editEnd();
  }

  view.replaceWith(area);
  area.focus();
}

function editEnd() {
  view.innerHTML = area.value;
  area.replaceWith(view);
}



