/* 
  Скрытое окно на сайте с кодовым словом
*/

let aboutMe = '';

$(document).ready(function(){
  $(document).on('keydown', startCollect);
})

function startCollect(evt) {
  if (evt.key == 'z') {
    console.log('start collect');
    $(document).off('keydown', startCollect);
    $(document).on('keydown', collectSymbol);
  }
}

function collectSymbol (evt) {
  if (evt.keyCode == 32 || evt.key == 'Escape') {
    stopCollect();
  } else {
    console.log(aboutMe);
    aboutMe += evt.key;
    if (aboutMe == 'uuu') {
      $('#myModal').modal({
        show: true,
      });
    }
  }
}

function stopCollect() {
  console.log('stop');
  aboutMe = '';
  $(document).off('keydown', collectSymbol);
  $(document).on('keydown', startCollect);
}