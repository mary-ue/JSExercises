document.querySelector('.card-number').oninput = function () {
  let cardNum = this.value.trim();
  if (cardNum.length > 5) {
    let cardInfo = new CardInfo(cardNum, {
      banksLogosPath: './node_modules/card-info/dist/banks-logos/',
      brandsLogosPath: './node_modules/card-info/dist/brands-logos/',
    });

    if (cardInfo.bankLogo) {
      document.querySelector('.card-image').src = cardInfo.bankLogo;
    }

    if (cardInfo.brandLogo) {
      document.querySelector('.card-logo').src = cardInfo.brandLogo;
    }

    if (cardInfo.backgroundColor) {
      document.querySelector('.card-front').style.backgroundColor =
        cardInfo.backgroundColor;
    }
  }
};
