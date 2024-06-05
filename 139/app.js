document.onclick = (evt) => {
  console.log(evt.target.tagName)
  if (evt.target.tagName == 'IMG') {
    evt.target.classList.toggle('bordered')
  }
}