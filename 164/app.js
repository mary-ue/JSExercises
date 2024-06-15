let slides = document.querySelectorAll('.slide-single');
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}

let step = 0;
let offset = 0;

function draw() {
  let img = document.createElement('img');
  img.src = slider[step];
  img.classList.add('slide-single');
  img.style.left = offset * 506 + 'px';
  document.querySelector('#slide').appendChild(img);

  if ( step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left() {
  document.onclick = null;
  slidesVisible = document.querySelectorAll('.slide-single');
  let offsetVisible = 0;
  for (let i = 0; i < slidesVisible.length; i++) {
    slidesVisible[i].style.left = offsetVisible * 506 - 506 + 'px';
    offsetVisible++;
  }
  setTimeout(() => {
    slidesVisible[0].remove();
    draw();
    document.onclick = left;
  }, 1000)
}

draw(); draw();

document.onclick = left;

