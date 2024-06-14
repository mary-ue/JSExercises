const btnShowDescr = document.getElementById('show-description');
const description = document.querySelector('.description');

btnShowDescr.onclick = () => {
  description.classList.toggle('hide');

  if (description.classList.contains('hide')) {
    btnShowDescr.classList.remove('active');
  } else {
    btnShowDescr.classList.add('active');
  }
};
