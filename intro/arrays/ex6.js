let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let elementLength = arr.map(function(value) {
  return value.length;
})

function oddLengths(array) {
  return array.filter(function(count) {
    if (count % 2 === 1) {
      return count;
    }
  })
}

console.log(oddLengths(elementLength)); // => [1, 5, 3]