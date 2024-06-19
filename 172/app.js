document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let display;

let video = document.querySelector('#video-player');
let progress = document.querySelector('.progress');

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function speedUp() {
  video.play();
  video.playbackRate = 2;
}

function speedDown() {
  video.play();
  video.playbackRate = 0.5;
}

function speedNormal() {
  video.play();
  video.playbackRate = 1;
}

function videoVolume() {
  let v = this.value;
  video.volume = v / 100;
}

function progressUpdate() {
  // console.log(video.duration);
  // console.log(video.currentTime);

  let d = video.duration;
  let c = video.currentTime;
  progress.value = (c / d) * 100;
  document.querySelector('#out').innerHTML = video.currentTime;
}

function videoRewind(evt) {
  let w = this.offsetWidth;
  let o = evt.offsetX;
  this.value = (o / w) * 100;
  video.pause();
  video.currentTime = video.duration * (o / w);
  video.play();
}
