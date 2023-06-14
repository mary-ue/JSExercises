/*
Обычно при чтении несуществующего свойства из объекта возвращается undefined.
Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
Это может помочь обнаружить программные ошибки пораньше.
Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.
*/

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new Error('Ошибка: такого свойства не существует');
      }
    }
  });
}
  
user = wrap(user);
  
console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует