google.charts.load('current', {
  packages: ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

let arr = ship; // данные по кораблям из другого файла

function drawRegionsMap() {
  let data = google.visualization.arrayToDataTable(arr);

  let options = {
    colorAxis: {colors: ['green', 'blue']}
  };

  let chart = new google.visualization.GeoChart(
    document.getElementById('regions_div')
  );
  document.getElementById('regions_div').style.height =
    (5 / 9) * document.getElementById('regions_div').offsetWidth + 'px';

  chart.draw(data, options);

  showTable(arr)
}

// resize
window.onload = resize;
window.onresize = resize;

function resize() {
  drawRegionsMap();
}

function showTable(arr) {
  let out = '';
  for (let i = 1; i < arr.length; i++) {
    out += `<li class="list-group-item d-flex justify-content-between align-items-center">${arr[i][0]}<span class="">${arr[i][1]}</span></li>`;
  }

  document.querySelector('.list-group').innerHTML = out;
}

// buttons
document.querySelectorAll('.btn').forEach(function(element) {
  element.onclick = function() {
    let data = this.getAttribute('data');
    console.group(data);

    if (data === 'ship') {
      arr = ship;
    }

    drawRegionsMap();
  }
})
