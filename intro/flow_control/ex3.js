function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error: not an integer');
    return;
  }
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  } 
}

evenOrOdd(22);
evenOrOdd(315);
evenOrOdd(3346);
evenOrOdd(22.17);
evenOrOdd('Howdy doody.');