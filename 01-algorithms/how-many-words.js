// For any given string, write a function that returns how many words there are in that string.

// HINTS: the string ends with a dot and words are separated with single spaces
// EXAMPLE: “A person who never made a mistake never tried anything new.” Should return 11

let example = "A person who never made a mistake never tried anything."

function count(str) {
  let words = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === ".") {
      words += 1;
    }
  }
  return words;
}


let result = count(example);

console.log({ result });
