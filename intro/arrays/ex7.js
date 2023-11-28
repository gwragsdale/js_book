let array = [3, 5, 7];
const initialValue = 1;

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

console.log(sumOfSquares(array)); // => 83