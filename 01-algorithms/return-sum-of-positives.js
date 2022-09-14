// For an array containing both negative and positive values,
//write a function that returns the sum of the positive values.
// (The order of those values is random)

let example = [6, 2, -11, 0, 3, 8, -22, 14];

function summary(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}

let result = summary(example);

console.log(result);
