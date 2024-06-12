let apiKey = 'AIzaSyASw6aZ6UdwXaQ-9RY1eN9DrMgNsa85gI0';
let spreadsheetId = '1jsIlKUB7DjZVbZGtKT-MsXwYuOjo8rP5Tk_Ev_NbIWo';
let sheetName = 'シート1';
let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.values);
    createGoodsCards(data.values);
  })
  .catch((error) => console.error('Error fetching data:', error));

function createGoodsCards(goods) {
  let container = document.getElementById('goods-container');

  for (let i = 1; i < goods.length; i++) {
    let good = goods[i];
    let name = good[1];
    let imageUrl = good[2];
    let price = good[3];

    let card = document.createElement('div');
    card.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'goods');

    let content = `
    <div class="goods">
      <h5 class="text-center text-overflow">${name}</h5>
      <img src="${imageUrl}" alt="${name}">
      <p class="cost text-center">Цена: ${price}</p>
    </div>
  `;

    card.innerHTML = content;

    container.appendChild(card);
  }
}
