let h2Divs = document.querySelectorAll('.header-bg');
let colors = ['0079c1', '49176d', '00a0af', '49a942'];

for (let i = 0; i < h2Divs.length; i++) {
  let bgDiv = document.createElement('div');

  bgDiv.style.height = h2Divs[i].offsetHeight + 'px';
  bgDiv.style.width = h2Divs[i].querySelector('h2').offsetWidth + 'px';
  bgDiv.style.transform = 'rotate(' + randomInteger(-10, 10) + 'deg)';
  bgDiv.style.backgroundColor =
    '#' + colors[randomInteger(0, colors.length - 1)];

  bgDiv.classList.add('square-bg');
  h2Divs[i].appendChild(bgDiv);
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
