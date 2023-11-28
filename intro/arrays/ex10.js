let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

/*
function replace(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (array[i][j] === 6) {
        return 606;
      } else {

      }
    }
  }
}

console.log(replace(arr)); */

arr[1][3] = 606;

console.log(arr);