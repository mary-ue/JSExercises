/* 
Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
*/

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.getElementById('container');

function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUL = createTreeDom(obj[key]);
    if (childrenUL) {
      li.append(childrenUL);
    }

    ul.append(li);
  }

  return ul;
}

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

createTree(container, data);

