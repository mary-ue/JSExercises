window.onload = function() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let clicks = [[0, 0]];

  canvas.onclick = function(evt) {
    let x = evt.offsetX;
    let y = evt.offsetY;
    clicks.push([x, y]);

    if (clicks.length > 2) {
      ctx.moveTo(clicks[clicks.length - 3][0],clicks[clicks.length - 3][1]);
      ctx.lineTo(x, y);
    }
    
    ctx.moveTo(clicks[clicks.length - 2][0],clicks[clicks.length - 2][1]);
    ctx.lineTo(x, y);

    ctx.stroke();
  }

}