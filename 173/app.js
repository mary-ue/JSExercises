const img = ['chihiro', 'howl', 'kaguyahime', 'totoro'];
let square = document.querySelectorAll('.square');

function random (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

square.forEach(function(element) {
  let randomNum = random(0, img.length - 1);
  element.style.backgroundImage = `url(img/${img[randomNum]}.jpg)`;
  element.dataset.data = randomNum;
  element.onclick = changeImage;
});

function changeImage() {
  document.querySelector('#out').innerHTML = '';
  let data = this.dataset.data;
  console.log(data);

  if (+data+1 < img.length) {
    data++;
  } else {
    data = 0;
  }
  this.dataset.data = data;
  this.style.backgroundImage = `url(img/${img[data]}.jpg)`;

  checkSurprise();
}

function checkSurprise() {
  let res = [];

  square.forEach(function(element) {
    res.push(element.dataset.data);
  });

  if (res.join('') === '3333') {
    document.querySelector('#out').innerHTML = 'Yes';
  }
}
