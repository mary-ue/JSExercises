// Implement a function that receives a string, and lets you extend it with repeated calls. 
// When no argument is passed you should return a string consisting of space-separated words you haveve received earlier.

// Note: There will always be at least 1 string; all inputs will be non-empty.

// For example:

// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

function createMessage(str) {
  let message = str || '';

  function inner(str) {
    if (!str) return message;

    message += ' ' + str;
    return inner;
  }

  return inner;
}
console.log(createMessage("Hello")("World!")("how")("are")("you?")());
