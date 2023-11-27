function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

console.log(doubler(5));