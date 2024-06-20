let fileInput = document.querySelector('#file-input');
let out = document.querySelector('#out');

fileInput.addEventListener('change', function () {
  let file = fileInput.files[0];

  let reader = new FileReader();
  reader.onload = function () {
    // console.log(reader.result);
    palindrom(reader.result.split('\r\n'));
  };
  reader.readAsText(file);
});

function palindrom(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('.');
    str2 = arr[i].toLowerCase().split('').reverse().join('');
    if (str2 == arr[i]) {
      let elem = arr[i];
      console.log(elem);
      out.innerHTML += `<p>${elem}</p>`;
    }
  }
}
