const keyMap = {
  81: 'Q', 87: 'W', 69: 'E', 82: 'R', 84: 'T', 89: 'Y', 85: 'U', 73: 'I', 79: 'O', 80: 'P',
  219: '[', 221: ']',
  65: 'A', 83: 'S', 68: 'D', 70: 'F', 71: 'G', 72: 'H', 74: 'J', 75: 'K', 76: 'L', 186: ';', 222: '\'',
  90: 'Z', 88: 'X', 67: 'C', 86: 'V', 66: 'B', 78: 'N', 77: 'M', 188: ',', 190: '.', 191: '/'
};

const keyboard = [
  81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, // Q, W, E, R, T, Y, U, I, O, P, [, ]
  65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222,     // A, S, D, F, G, H, J, K, L, ;, '
  90, 88, 67, 86, 66, 78, 77, 188, 190, 191         // Z, X, C, V, B, N, M, ,, ., /
];

function init() {
  let out = '';

  for (let i = 0; i < keyboard.length; i++) {
    const keyCode = keyboard[i];
    const char = keyMap[keyCode] || '';
    out += `<div class="k-key" data="${char}">${char}</div>`;
  }

  document.querySelector('#keyboard').innerHTML = out;
}

init();

