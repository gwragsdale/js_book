function /* global */multiply(/* local */left, /* local */right) {
  let /* local */ product = /* local */ left * /* local */ right;
  return /* local */product;
}

function /* global */getNumber(/* local */prompt) {
  return /* local */parseFloat(/* local */question(/* local */prompt));
}

let /* global */left = /* global */getNumber('Enter the first number: ');
let /* global */right = /* global */getNumber('Enter the second number: ');
/* global */console.log(`${/* local */left} * ${/* local */right} = ${/* global */multiply(/* global */left, /* global */right)}`);