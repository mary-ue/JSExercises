/*
  Шифр Цезаря
*/

const OFFSET = 3;

document.getElementById('in').oninput = function() {
  let offset = OFFSET;
  let help = document.getElementById('help');
  let str = this.value;
  let out = '';
  console.log(str)

  for (let i = 0; i < str.length; i++) {
    // из символа в код
    let code = str.charCodeAt(i);
    code = code + offset;
    // из кода в символ
    out += String.fromCharCode(code);
  }

  document.getElementById('out').innerHTML = out;
}

document.getElementById('out2').oninput = function() {
  const offset = OFFSET;
  let str = this.value;
  let out = '';

  for (let i = 0; i < str.length; i++) {
    // из символа в код
    let code = str.charCodeAt(i);
    code = code - offset;
    // из кода в символ
    out += String.fromCharCode(code);
  }

    document.getElementById('out3').innerHTML = out;
}