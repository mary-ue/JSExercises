/* 
Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать
*/

mouse.tabIndex = 0;

mouse.onclick = function() {
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
};

mouse.onkeydown = function(evt) {
  switch(evt.key) {
    case 'ArrowLeft': 
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
      return false;
    case 'ArrowUp': 
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 'ArrowRight': 
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 'ArrowDown': 
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};