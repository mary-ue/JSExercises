// Записать строку (символы строки) в обратном порядке

const myStr = 'pizza';

// const reverced = myStr.split('').reverse().join('');

const reverseString = (str) => {
  const reversed = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join('');
};

console.log(reverseString(myStr));
