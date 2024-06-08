const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['田中', '山下', '松本', '木村'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });