document.body.onclick = (evt) => {
  if (evt.target.classList.contains('goods-min')) {
    const allDivs = document.querySelectorAll('.goods-img-min div');
    allDivs.forEach((div) => {
      div.classList.remove('active');
    });

    const src = evt.target.src;
    document.getElementById('goods-max').src = src;

    let parentDiv = evt.target.parentNode;
    parentDiv.classList.add('active');
  }
};
