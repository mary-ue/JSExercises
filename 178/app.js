// Alt + N

// let flag = false;
// ====== вариант 1 =========== //
// document.onkeydown = function (event) {
//     // console.log(event);
//     // code: "AltLeft"
//     if (event.code == 'AltLeft') flag = true;
//     if (event.code == 'KeyN' && flag) {
//         flag = false;
//         console.log('work');
//     }
// }

// ====== вариант 2 =========== //
document.onkeydown = function (event) {
  if (event.code == 'AltLeft') {
    document.onkeyup = function (event) {
      if (event.code == 'KeyN') {
        console.log('work');
      } else {
        document.onkeyup = null;
      }
    };
  }
};
