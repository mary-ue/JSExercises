document.querySelector('button').onclick = () => {
  let out = document.getElementById('out');
  let dateStart = document.querySelector('#start-date').value;
  let dateEnd = document.querySelector('#end-date').value;
  dateStart = Date.parse(dateStart);
  dateEnd = Date.parse(dateEnd);

  for (let i = dateStart; i < dateEnd; i = i+24*60*60*1000) {
    out.innerHTML += new Date(i).toISOString().substring(0, 10) + '<br>';
  }
}