function /* var */multiply(/* var */left, /* var */right) {
  let /* var */ product = /* var */ left * /* var */ right;
  return /* var */product;
}

function /* var */getNumber(/* var */prompt) {
  return /* var */parseFloat(/* var */question(/* var */prompt));
}

let /* var */left = /* var */getNumber('Enter the first number: ');
let /* var */right = /* var */getNumber('Enter the second number: ');
/* var */console.log(`${/* var */left} * ${/* var */right} = ${/* var */multiply(/* var */left, /* var */right)}`);